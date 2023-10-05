import { paymentsHandler } from "@/lib/paymentsHandler";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const res = await fetch(
			"https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
			{
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		console.log("res in test-payment gateway:", res);
	} catch (error) {
		console.log("error in test-payment gateway:", error);
	}
}
