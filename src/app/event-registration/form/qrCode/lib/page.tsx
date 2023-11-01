"use client";

import { v4 as uuidv4 } from "uuid";

import { getQrCode } from "@/lib/util";

const QrCode = () => {
	const { x_verify, base64EncodedPayload } = getQrCode();

	const handleQr = async () => {
		const userID = uuidv4();
		const userTransctionID = uuidv4();

		try {
			const res = await fetch("/api/payment-gateway", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"X-VERIFY": x_verify,
				},
				body: JSON.stringify({
					request: base64EncodedPayload,
				}),
			});

			const body = await res.json();
			console.log("body::", body);
			// const url = body.data.instrumentResponse.redirectInfo?.url;
			// window.open(url, "_self");
		} catch (err) {
			console.log("error in the start:", err);
		}
	};

	return (
		<div className="h-screen w-screen bg-black flex justify-center items-center">
			<div
				onClick={handleQr}
				className="border border-white px-5 py-3 text-white hover:bg-white hover:text-black hover:cursor-pointer"
			>
				Click to pay with QR
			</div>
		</div>
	);
};

export default QrCode;
