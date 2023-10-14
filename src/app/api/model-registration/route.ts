import { PAYMENT } from "@/lib/constants";
import dbConnect from "@/lib/mongodb";
import ModelSchema from "@/models/modelUserData";
import { NextResponse, NextRequest } from "next/server";
const client = require("@mailchimp/mailchimp_transactional")(
	"md-ITAj3bHeRIFp7p1iAqzGbw"
);
import { sha256 } from "js-sha256";

export async function GET(req: NextRequest) {
	try {
		const merchantId = req.nextUrl.searchParams.get("merchantID");
		const xverify = req.nextUrl.searchParams.get("xverify");
		const merchantTransactionID = req.nextUrl.searchParams.get(
			"merchantTransactionID"
		);

		// console.log({merchantId,xverify,merchantTransactionID})

		const res = await fetch(
			`https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionID}`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY": `${xverify + "###" + PAYMENT.SALT_INDEX}`,
					"X-MERCHANT-ID": merchantId as string,
				},
			}
		);

		const body = await res.json();
		console.log("body in model-reg::::", body);

		return res;

		// return NextResponse.json({
		// 	success: true,
		// 	status: 200,
		// 	message: body,
		// });
	} catch (error) {
		return NextResponse.json({
			success: false,
			status: 500,
			message: error,
		});
	}
}

export async function POST(req: NextRequest) {
	try {
		const { formBody } = await req.json();

		console.log("formBody:", formBody);
		// console.log("captcha:", captcha);

		// const googleResponse = await fetch(
		// 	`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${captcha}`,
		// 	{
		// 		method: "POST",
		// 	}
		// );

		// console.log("googleResponse:", googleResponse.statusText);

		await dbConnect();
		await ModelSchema.create(formBody);

		// if (googleResponse.statusText === "OK") {
		// 	return NextResponse.json({
		// 		message: "Form submitted",
		// 		success: true,
		// 	});
		// } else {
		// 	return NextResponse.json({
		// 		message: "Captcha validation failed",
		// 		success: true,
		// 	});
		// }
		return NextResponse.json({
			message: "Data saved",
			success: true,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

//this request runs everytime the user is redirected to registraion-successful page
// http://localhost:3000/api/model-registration?merchantTransactionID=BU7850590068188110

export async function PUT(req: NextRequest) {
	const merchantTransactionId = req.nextUrl.searchParams.get(
		"merchantTransactionID"
	);

	const sha = sha256(
		`/pg/v1/status/${PAYMENT.MERCHANTID}/${merchantTransactionId}${PAYMENT.SALT_KEY}`
	);
	const x_verify = `${sha}###${PAYMENT.SALT_INDEX}`;
	const res = await fetch(
		`https://api.phonepe.com/apis/hermes/pg/v1/status/${PAYMENT.MERCHANTID}/${merchantTransactionId}`,
		{
			//need to make the url dynamic
			method: "GET",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				"X-VERIFY": x_verify,
				"X-MERCHANT-ID": `${PAYMENT.MERCHANTID}`,
			},
		}
	);

	const body = await res.json();
	const modelRegistrationStatus = await ModelSchema.findOne({
		"uid.userTransactionID": merchantTransactionId,
	});
	// console.log({modelRegistrationStatus})
	const paymentStatus = body.code;

	await dbConnect();

	await ModelSchema.updateOne(
		modelRegistrationStatus, //updating payment status
		{ $set: { paymentStatus: paymentStatus } }
	);

	//send the mail with the status to the user , uncomment this to actually send the mail
	// const message = {
	// 	from_email: "support@buddiesproductions.com",
	// 	subject: "test",
	// 	text:`Payment Status : ${paymentStatus}`,
	// 	to: [
	// 	  {
	// 		email: modelRegistrationStatus.contactDetails.email,
	// 		type: "to"
	// 	  }
	// 	]
	//   };

	//   const response = await client.messages.send({
	//     message
	//   });
	//   console.log(response);

	const updatedStatus = await ModelSchema.findOne({
		"uid.userTransactionID": merchantTransactionId,
	});
	return NextResponse.json({
		status: {
			message: "Payment Status Updated",
			value: updatedStatus,
		},
	});
}
