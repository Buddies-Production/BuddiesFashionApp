import { PAYMENT } from "@/lib/constants";
import dbConnect from "@/lib/mongodb";
import ModelSchema from "@/models/modelUserData";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const merchantId = req.nextUrl.searchParams.get("merchantID");
		const xverify = req.nextUrl.searchParams.get("xverify");
		const merchantTransactionID = req.nextUrl.searchParams.get(
			"merchantTransactionID"
		);

		const res = await fetch(
			`https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionID}`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY": xverify as string,
					"X-MERCHANT-ID": merchantId as string,
				},
			}
		);
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
		const body = await req.json();

		await dbConnect();
		const res = await ModelSchema.create(body);

		return NextResponse.json({
			message: "Data saved",
			success: true,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	const merchantTransactionId = req.nextUrl.searchParams.get(
		"merchantTransactionID"
	);
	const res = await fetch(
		`https://api.phonepe.com/apis/hermes/pg/v1/status/${PAYMENT.MERCHANTID}/${merchantTransactionId}`,
		{
			//need to make the url dynamic
			method: "GET",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				"X-VERIFY":
					"7c3628215916f72f93975773006d11bcee4357992d5ce1cf9f4464f59274a293###1",
				"X-MERCHANT-ID": "MERCHANTUAT",
			},
		}
	);

	const body = await res.json();
	const { userData } = await req.json();
	const paymentStatus = body.code;

	await dbConnect();

	await ModelSchema.updateOne(
		userData, //updating payment status
		{ $set: { paymentStatus: paymentStatus } }
	);

	const modelRegistrationStatus = await ModelSchema.findOne(userData); //fetching updated new userdata
	// console.log(modelRegistrationStatus)

	return NextResponse.json({
		status: {
			message: "Payment Status Updated",
			value: modelRegistrationStatus,
		},
	});
}
