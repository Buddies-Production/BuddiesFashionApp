import dbConnect from "@/lib/mongodb";
import { PAYMENT } from "@/lib/constants";
import { sha256 } from "js-sha256";

import { NextRequest, NextResponse } from "next/server";
const client = require("@mailchimp/mailchimp_transactional")(
	"md-ITAj3bHeRIFp7p1iAqzGbw"
);
import ModelSchema, { modelUserSchemaType } from "@/models/modelUserData";


/*

{
  userID: 'f61d2f8e-3543-43bd-b255-6796b47c6bb8',
  userTransctionID: '157961f9-33ae-4d60-a6b7-1328f86441d8'
}

{
  userID: 'cf580122-0547-4deb-8e1d-149376dd9586',
  userTransctionID: 'fec2526a-5cdd-49ab-96f0-72c80f97469c'
}


{
  "merchantId": "BUDDIESONLINE",
  "merchantTransactionId": "BU7850590068188110", //reference id generated from the uuid seeems to be invalid
  "merchantUserId": "cf580122-0547-4deb-8e1d-149376dd9586",
  "amount": 100,
  "redirectUrl": "https://buddiesfashion.in/event-registration/form/registration-successful",
  "redirectMode": "REDIRECT",
  "callbackUrl": "https://test-callback-phonepe.vercel.app/",
  "paymentInstrument": {
    "type": "PAY_PAGE"
  }
}


ewogICJtZXJjaGFudElkIjogIkJVRERJRVNPTkxJTkUiLAogICJtZXJjaGFudFRyYW5zYWN0aW9uSWQiOiAiQlU3ODUwNTkwMDY4MTg4MTEwIiwKICAibWVyY2hhbnRVc2VySWQiOiAiY2Y1ODAxMjItMDU0Ny00ZGViLThlMWQtMTQ5Mzc2ZGQ5NTg2IiwKICAiYW1vdW50IjogMTAwLAogICJyZWRpcmVjdFVybCI6ICJodHRwczovL2J1ZGRpZXNmYXNoaW9uLmluL2V2ZW50LXJlZ2lzdHJhdGlvbi9mb3JtL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly90ZXN0LWNhbGxiYWNrLXBob25lcGUudmVyY2VsLmFwcC8iLAogICJwYXltZW50SW5zdHJ1bWVudCI6IHsKICAgICJ0eXBlIjogIlBBWV9QQUdFIgogIH0KfQ==

31a69617-dd30-4f5e-902c-0b663c2a06dc == saltkey

xverify - 3c482792d6c242cfd3d20ac59d00fbc7f7e6f635107bdf004bca74ae2e8ac745###1 





result from - https://api.phonepe.com/apis/hermes/pg/v1/status/BUDDIESONLINE/BU7850590068188110

xverify - 51b420194162412be0a2cbac45d9570e97df21d93837107668e069b23bd15a3b###1

{
    "success": true,
    "code": "PAYMENT_SUCCESS",
    "message": "Your payment is successful.",
    "data": {
        "merchantId": "BUDDIESONLINE",
        "merchantTransactionId": "BU7850590068188110",
        "transactionId": "T2310102028584292427705",
        "amount": 100,
        "state": "COMPLETED",
        "responseCode": "SUCCESS",
        "paymentInstrument": {
            "type": "UPI",
            "utr": "328347347297",
            "cardNetwork": null,
            "accountType": "SAVINGS"
        }
    }
}
*/

//this function goes to the db , gets all the users that have their payment!=PAYMENT_SUCCESS and manually checks each one with the check API by phone pe , and updates the PAYMENT STATUS in db , plus sends emails to all those whose payment was not successful before but it is presently.

export async function POST(req: NextRequest) {
	await dbConnect();
  const modelRegistrationData:modelUserSchemaType[] = await ModelSchema.find({paymentStatus:{ "$ne": "PAYMENT_SUCCESS" }})

  modelRegistrationData.forEach(async(modelData)=>{
	const sha = sha256(`/pg/v1/status/${PAYMENT.MERCHANTID}/${modelData.uid.userTransactionID}${PAYMENT.SALT_KEY}`)
	const x_verify = `${sha}###${PAYMENT.SALT_INDEX}`;
    const res = await fetch(
      `https://api.phonepe.com/apis/hermes/pg/v1/status/${PAYMENT.MERCHANTID}/${modelData.uid.userTransactionID}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY":x_verify, 
          "X-MERCHANT-ID": "BUDDIESONLINE",
        },
      }
    );
  
    const body = await res.json();
	console.log({body})

    await ModelSchema.updateOne(
      { uid: {
        userID: modelData.uid.userID,
        userTransactionID: modelData.uid.userTransactionID
      }}, //updating payment status
      { $set: { paymentStatus: body.code } }
    );

	if(body.code=="PAYMENT_SUCCESS"){ //send mail only if the payment is successful
    const message = {
      from_email: "support@buddiesproductions.com",
      subject: "test",
      text:`Payment Status : ${body.code}`,
      to: [
        {
          email: modelData.contactDetails.email,
          type: "to"
        }
      ]
    };

    // const response = await client.messages.send({
    //   message
    // });
    // console.log(response);

}
   
  })


	// async function run() {
	//   const response = await client.messages.send({
	//     message
	//   });
	//   console.log(response);
	// }
	// run();

	return NextResponse.json({ modelRegistrationData });
}
