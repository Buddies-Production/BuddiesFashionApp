import { NextRequest, NextResponse } from "next/server";

import { main } from "@/lib/upload";

export async function POST(req: NextRequest) {
	try {
		const body = await req.formData();
		const file: File | null = body.get("file") as unknown as File;

		if (!file) return NextResponse.json({ success: false });

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		let key: string =
			(req.nextUrl.searchParams.get("firstName") as string) +
			req.nextUrl.searchParams.get("lastName") +
			req.nextUrl.searchParams.get("fileName");

		await main(key, buffer);

		return NextResponse.json({
			success: true,
		});
	} catch (error) {
		return NextResponse.json({
			success: false,
		});
	}
}
