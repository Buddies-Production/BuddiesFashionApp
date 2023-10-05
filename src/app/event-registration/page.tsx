"use client";

import clsx from "clsx";
import Link from "next/link";
import { BackButton } from "../components/server";

import { RootState, useAppSelector } from "@/store/store";

export default function EventRegistration() {
	return (
		<div
			className={clsx(
				"h-screen w-screen flex justify-center font-sans bg-black relative pt-20",
				"lg:items-center lg:pt-0"
			)}
		>
			<BackButton linkTo="/" />
			<div
				className={clsx(
					"rounded-2xl shadow-xl shadow-white/20 h-max w-[90%] bg-transparent px-10 font-normal border border-white text-sm",
					"lg:w-[60%] lg:text-base"
				)}
			>
				<div
					className={clsx(
						"w-full flex items-center justify-between mt-5 text-white"
					)}
				>
					<p className={clsx("text-xl font-semibold", "lg:text-2xl")}>
						Steps to register
					</p>
				</div>
				<p className={clsx("text-[#FB9214] font-semibold mt-5")}>
					Dear Aspirants,
				</p>
				<p className="text-[#FB9214] font-semibold">
					Please read the process carefully before filling out the
					form:
				</p>
				<div className="mt-5 flex">
					<p className="font-bold whitespace-nowrap">Step 1:</p>{" "}
					<p className="pl-5">Click on go to form.</p>
				</div>
				<div className="mt-3 flex">
					<p className="font-bold whitespace-nowrap">Step 2:</p>{" "}
					<p className="pl-5">
						Fill in your credentials. All fields are mandatory.
					</p>
				</div>
				<div className="mt-3 flex">
					<p className="font-bold whitespace-nowrap">Step 3:</p>{" "}
					<p className="pl-5">Upload your pictures as mentioned.</p>
				</div>
				<div className="mt-3 flex">
					<p className="font-bold whitespace-nowrap">Step 4:</p>
					<p className="pl-5">
						Click on the pay registration fees to pay the required
						mandatory registration fees.
					</p>
				</div>
				<div className="mt-3 flex">
					<p className="font-bold whitespace-nowrap">Step 5</p>:{" "}
					<p className="pl-5">
						Once all the fields are completed, click on accept T&Cs
						& submit the form
					</p>
				</div>
				<p className="mt-5">
					For any clarity, kindly call the helpline numbers between 11
					am to 7 pm.
				</p>
				<p className="mt-3">
					Contact: <b>+91 93101-70380</b> or kindly write to us on{" "}
					<b>support@buddiesproductions.com</b>
				</p>
				<div className="w-full flex mt-10 mb-10 justify-center">
					<Link
						href={"event-registration/form"}
						className={clsx(
							"px-16 py-5 border border-white rounded font-semibold",
							"transition-colors duration-500",
							"hover:text-black hover:bg-white"
						)}
					>
						Go to form
					</Link>
				</div>
			</div>
		</div>
	);
}
