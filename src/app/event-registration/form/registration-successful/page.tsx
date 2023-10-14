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

// http://localhost:3000/api/model-registration?merchantTransactionID=BU7850590068188110
	async function updatePaymentStatusDB() {
		const res = await fetch(
			`/api/model-registration?merchantTransactionID=${userTransactionID}&xverify=${x_verify}`,
			{
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({}),
			}
		);

		const body = await res.json();
		setPaymentStatus(body.value.paymentStatus)

	}

	useEffect(() => {
		//checking the payment status which will be replaced by checking the database for the payment status
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
