import Image from "next/image";

import {
	FbLogo,
	InstaLogo,
	LinkedinLogo,
	TwitterLogo,
	YoutubeLogo,
} from "../../../../public";

import { BookAntFont } from "../../../../font";
import Link from "next/link";
import clsx from "clsx";

export default function Footer() {
	return (
		<div
			className={clsx(
				"bg-[#F0F0F0] w-full flex flex-col justify-between items-center px-4 py-4 text-black",
				"lg:flex-row lg:h-72"
			)}
			style={{
				fontFamily: BookAntFont.style.fontFamily,
			}}
		>
			<div
				className={clsx(
					"w-full text-xs",
					"lg:w-[50%] lg:text-xl lg:ml-[5%]"
				)}
			>
				<p className={clsx("mb-2", "lg:mb-3")}>
					Welcome to Buddies Fashion, where brilliance meets
					innovation!
				</p>
				<p>
					We are a leading company dedicated to delivering exceptional
					products and services to cater to your needs.
				</p>
				<div
					className={clsx(
						"flex w-full justify-center mt-5",
						"lg:w-[20%] lg:mt-10 lg:justify-between"
					)}
				>
					<div className="w-[80%] flex justify-between items-center">
						<Link
							href={
								"https://www.instagram.com/d2rmrandmissindia/"
							}
							target="_blank"
						>
							<Image
								src={InstaLogo}
								alt="D2R mr and miss india runway model Instagram"
							/>
						</Link>
						<Link
							href={
								"https://www.linkedin.com/showcase/d2r-mr-and-miss-india"
							}
							target="_blank"
						>
							<Image
								src={LinkedinLogo}
								alt="D2R mr and miss india runway model Linkedin"
							/>
						</Link>
						<Link
							href={"https://www.youtube.com/@D2RMrMissIndia"}
							target="_blank"
						>
							<Image
								src={YoutubeLogo}
								alt="D2R mr and miss india runway model youtube"
								className="h-10 w-10"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					"flex justify-center text-xs w-full mt-5",
					"lg:w-[30%] lg:text-base lg:mr-[5%] lg:mt-0"
				)}
			>
				{/* <div className="flex flex-col">
					<p className="font-bold">MTV D2R</p>
					<Link href={"/media"}>Season 1</Link>
				</div> */}
				<div className="flex flex-col mr-10">
					<p className="font-bold">Customer care</p>
					<Link href={"/terms-conditions"}>Terms & Conditions</Link>
					<Link href={"/privacy-policy"}>Privacy policy</Link>
					{/* <Link href={""}>Returns & refund</Link> */}
					{/* <Link href={""}>Survey & feedback</Link> */}
				</div>
				<div className="flex flex-col">
					<p className="font-bold">Pages</p>
					<Link href={"/about"}>About</Link>
					<Link href={"/media"}>Media</Link>
					<Link href={"/contact-us"}>Contact Us</Link>
					<Link href={"/event-registration"}>Event Registration</Link>
					{/* <Link href={""}>Blog</Link> */}
				</div>
			</div>
		</div>
	);
}
