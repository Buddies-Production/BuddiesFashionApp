"use client";

import clsx from "clsx";

import { sha256 } from "js-sha256";
import { useEffect, useState } from "react";
import Link from "next/link";

import { useAppSelector } from "@/store/store";
import { PAYMENT_PAY } from "@/lib/constants";

export default function RegistrationSuccessful() {
	const [loader, setLoader] = useState(false);
	const [paymentStatus, setPaymentStatus] = useState({
		text: "",
		success: false,
	});

	const userTransactionID = useAppSelector(
		(state) => state.userReducer.userTransactionID
	);
	const userEmail = useAppSelector((state) => state.userReducer.userEmail);
	// const userEmail = "manishdoley23@gmail.com";
	// const userTransactionID = "6097fe8d-b79d-4103-a7b1-4e942a219d1e";
	// console.log("userEmail:", userEmail);
	// console.log("userTransactionID:", userTransactionID);
	const x_verify = sha256(
		`/pg/v1/status/${PAYMENT_PAY.MERCHANTID}/${userTransactionID}${PAYMENT_PAY.SALT_KEY}`
	);

	async function handlePhonePeCheckApi() {
		const res = await fetch(
			`/api/model-registration?xverify=${x_verify}&merchantID=${PAYMENT_PAY.MERCHANTID}&merchantTransactionID=${userTransactionID}`,
			{
				method: "GET",
			}
		);

		const body = await res.json();

		if (body.success) {
			setPaymentStatus({
				text: "Congratulations your payment has been successful! We will get in touch with you soon",
				success: true,
			});
			await fetch(`/api/mail?email=${userEmail}`, {
				method: "GET",
			});

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
		} else {
			setPaymentStatus({
				text: "There has been some error with the payment. Please try again or contact our helpline numbers +91 93101-70380, +91 78278-01756",
				success: false,
			});
		}
	}

	// async function checkApi() {
	// 	const statusObject = await handlePhonePeCheckApi();
	// 	console.log(statusObject.message);
	// 	setPaymentStatus((prev) => {
	// 		prev = statusObject.message;
	// 		if (prev == "Your payment is successful.")
	// 			setRegistrationStatus("successful");
	// 		else setRegistrationStatus("unsuccessful");

	// 		return prev;
	// 	});
	// }

	// async function updatePaymentStatusDB() {
	// 	await fetch(
	// 		`/api/model-registration?merchantTransactionID=${userTransactionID}&xverify=${x_verify}`,
	// 		{
	// 			method: "PUT",
	// 			headers: {
	// 				"Content-type": "application/json",
	// 			},
	// 			body: JSON.stringify({}),
	// 		}
	// 	);
	// }

	useEffect(() => {
		setLoader(true);
		setTimeout(() => {
			handlePhonePeCheckApi();
			setLoader(false);
		}, 5000);
	}, []);

	return (
		<>
			<div className="h-screen w-screen bg-black flex justify-center items-center relative">
				{loader ? (
					<div className="h-screen w-screen flex justify-center items-center bg-black/70 z-50 fixed top-0 left-10">
						<div role="status">
							<svg
								aria-hidden="true"
								className="w-[80%] h-[80%] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				) : (
					<div
						className={clsx(
							"text-white text-center",
							"lg:text-2xl"
						)}
					>
						<p className="px-20 lg:px-10">{paymentStatus.text}</p>
						{/* <p className="px-20 lg:px-10">
							Payment successful! We will contact you soon
						</p> */}
						<div className="mt-5 lg:mt-10">
							{paymentStatus.success ? (
								<Link
									className="bg-white px-5 py-3 text-black font-bold"
									href={"/"}
								>
									BACK TO HOME
								</Link>
							) : (
								<Link
									className="bg-white px-5 py-3 text-black font-bold"
									href={"/event-registration/form"}
								>
									TRY AGAIN
								</Link>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
