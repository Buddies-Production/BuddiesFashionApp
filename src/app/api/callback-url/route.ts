import dbConnect from "@/lib/mongodb";
import modelUserData from "@/models/modelUserData";
// import { setPaymentStatus } from "@/store/features/user/user.slice";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { response } = await req.json();

		const res = atob(response as string);
		const obj = JSON.parse(res);

		await dbConnect();
		const id = await modelUserData.find();
		if (id) {
			const searchId = id[id.length - 1]["_id"].toString();
			await modelUserData.findByIdAndUpdate(searchId, {
				paymentStatus: obj.code,
			});
		} else {
			return;
		}
		return NextResponse.json({
			message: obj.code,
			success: true,
		});
	} catch (error) {
		return NextResponse.json({
			message: error,
			success: false,
		});
	}
}

export async function GET(req: NextRequest, res: NextResponse) {
	try {
		return NextResponse.json({
			message: "Hello world",
			success: true,
		});
	} catch (error) {}
}
