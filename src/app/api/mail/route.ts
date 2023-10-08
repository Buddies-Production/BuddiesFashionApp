import dbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
const client = require("@mailchimp/mailchimp_transactional")(
	"md-ITAj3bHeRIFp7p1iAqzGbw"
);
import { v4 as uuidv4 } from "uuid";
import ModelSchema, { modelUserSchemaType } from "@/models/modelUserData";
import { PAYMENT } from "@/lib/constants";

/*

{
  userID: 'f61d2f8e-3543-43bd-b255-6796b47c6bb8',
  userTransctionID: '157961f9-33ae-4d60-a6b7-1328f86441d8'
}

{
  userID: 'cf580122-0547-4deb-8e1d-149376dd9586',
  userTransctionID: 'fec2526a-5cdd-49ab-96f0-72c80f97469c'
}

*/

export async function POST(req: NextRequest) {
	await dbConnect();
	const modelRegistrationData: modelUserSchemaType[] = await ModelSchema.find(
		{}
	);
	const paymentUnsuccessfulStatus = modelRegistrationData.filter(
		(modelData) => {
			return modelData.paymentStatus != "PAYMENT_SUCCESSFUL";
		}
	);

	paymentUnsuccessfulStatus.forEach(async (modelData) => {
		const res = await fetch(
			`https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/MERCHANTUAT/MT7850590068188104`, // replace with `https://api.phonepe.com/apis/hermes/pg/v1/status/${PAYMENT.MERCHANTID}/${merchantTransactionId}`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY":
						"7c3628215916f72f93975773006d11bcee4357992d5ce1cf9f4464f59274a293###1", // replace with x verify
					"X-MERCHANT-ID": "MERCHANTUAT",
				},
			}
		);

		const body = await res.json();

		await ModelSchema.updateOne(
			{
				uid: {
					userID: modelData.uid.userID,
					userTransactionID: modelData.uid.userTransactionID,
				},
			}, //updating payment status
			{ $set: { paymentStatus: body.code } }
		);

		const message = {
			from_email: "support@buddiesproductions.com",
			subject: "test",
			text: `Payment Status : ${body.code}`,
			to: [
				{
					email: modelData.contactDetails.email,
					type: "to",
				},
			],
		};

		const response = await client.messages.send({
			message,
		});
		console.log(response);
	});

	// async function run() {
	//   const response = await client.messages.send({
	//     message
	//   });
	//   console.log(response);
	// }
	// run();

	return NextResponse.json({ paymentUnsuccessfulStatus });
}
