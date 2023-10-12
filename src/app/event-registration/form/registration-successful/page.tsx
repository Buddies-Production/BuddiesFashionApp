"use client";

import { PAYMENT } from "@/lib/constants";
import { getRequestData } from "@/lib/util";
import { useAppSelector } from "@/store/store";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegistrationSuccessful() {
	const [paymentStatus, setPaymentStatus] = useState("");
	const [registrationStatus, setRegistrationStatus] = useState("");

	const userTransactionID = useAppSelector(
		(state) => state.userReducer.userTransactionID
	);
	const { x_verify } = getRequestData();

	async function handlePhonePeCheckApi() {
		const res = await fetch(
			`/api/model-registration?xverify=${x_verify}&merchantID=${PAYMENT.MERCHANTID}&merchantTransactionID=${userTransactionID}`,
			{
				//need to make the url dynamic
				method: "GET",
			}
		);

		// TEST HERE
		// const resMail = await fetch("/api/mail", {
		// 	method: "POST",
		// 	body: "hello",
		// });

		// const val = await resMail.json();
		// console.log("return from mail:", val);
		// xxxxxxx

		const body = await res.json();
		console.log("body::", body);

		return body;
	}

	async function checkApi() {
		const statusObject = await handlePhonePeCheckApi();
		console.log(statusObject.message);
		setPaymentStatus((prev) => {
			prev = statusObject.message;
			if (prev == "Your payment is successful.")
				setRegistrationStatus("successful");
			else setRegistrationStatus("unsuccessful");

			return prev;
		});
	}
	// http://localhost:3000/api/model-registration?merchantTransactionID=BU7850590068188110
	async function updatePaymentStatusDB() {
		await fetch(
			`/api/model-registration?merchantTransactionID=${userTransactionID}&xverify=${x_verify}`,
			{
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({}),
			}
		);
	}

	useEffect(() => {
		//checking the payment status which will be replaced by checking the database for the payment status
		checkApi();
		updatePaymentStatusDB();
	}, []);

	return (
		<div className="h-screen w-screen bg-black flex justify-center items-center">
			<div className={clsx("text-white text-center", "lg:text-2xl")}>
				{/* <p>{paymentStatus}</p> */}
				<p>Registration successfull</p>
				<p>We will contact you soon!</p>
				<div className="mt-5">
					<Link
						className="bg-white px-5 py-3 text-black font-bold"
						href={"/"}
					>
						BACK TO HOME
					</Link>
				</div>
			</div>
		</div>
	);
}
