import dbConnect from "@/lib/mongodb";
import { PAYMENT_PAY } from "@/lib/constants";
import { sha256 } from "js-sha256";

import { NextRequest, NextResponse } from "next/server";
const client = require("@mailchimp/mailchimp_transactional")(
	"md-ITAj3bHeRIFp7p1iAqzGbw"
);
import ModelSchema, { modelUserSchemaType } from "@/models/modelUserData";

//this function goes to the db , gets all the users that have their payment!=PAYMENT_SUCCESS and manually checks each one with the check API by phone pe , and updates the PAYMENT STATUS in db , plus sends emails to all those whose payment was not successful before but it is presently.

export async function POST(req: NextRequest) {
	await dbConnect();
	const modelRegistrationData: modelUserSchemaType[] = await ModelSchema.find(
		{ paymentStatus: { $ne: "PAYMENT_SUCCESS" } }
	);

	modelRegistrationData.forEach(async (modelData) => {
		const sha = sha256(
			`/pg/v1/status/${PAYMENT_PAY.MERCHANTID}/${modelData.uid.userTransactionID}${PAYMENT_PAY.SALT_KEY}`
		);
		const x_verify = `${sha}###${PAYMENT_PAY.SALT_INDEX}`;
		const res = await fetch(
			`https://api.phonepe.com/apis/hermes/pg/v1/status/${PAYMENT_PAY.MERCHANTID}/${modelData.uid.userTransactionID}`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY": x_verify,
					"X-MERCHANT-ID": "BUDDIESONLINE",
				},
			}
		);

		const body = await res.json();
		// console.log({ body });

		await ModelSchema.updateOne(
			{
				uid: {
					userID: modelData.uid.userID,
					userTransactionID: modelData.uid.userTransactionID,
				},
			}, //updating payment status
			{ $set: { paymentStatus: body.code } }
		);

		if (body.code == "PAYMENT_SUCCESS") {
			//send mail only if the payment is successful
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

			// const response = await client.messages.send({
			//   message
			// });
			// console.log(response);
		}
	});

	// async function run() {
	//   const response = await client.messages.send({
	//     message
	//   });
	//   console.log(response);
	// }
	// run();

	return NextResponse.json({ modelRegistrationData });
}

export async function GET(req: NextRequest) {
	const email = req.nextUrl.searchParams.get("email");

	const message = {
		from_email: "support@buddiesproductions.com",
		subject:
			"REGISTRATION COMPLETE FOR MTV D2R MR & MISS INDIA RUNWAY MODEL",
		text: `Your registration for MTV D2R Mr & Miss India Runway Model has been completed! We will get in touch with you soon`,
		to: [
			{
				email: email,
				type: "to",
			},
		],
	};

	async function run() {
		const response = await client.messages.send({
			message,
		});
	}
	run();
}
