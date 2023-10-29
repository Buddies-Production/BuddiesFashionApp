import Image from "next/image";

import { NavBar, Animated } from "./components/client";
import {
	LatestStories,
	WhatIsMtv,
	SocialLinks,
	Information,
	Footer,
	EventCallToAction,
	EventsAudition,
	MembersLanding,
} from "./components/server/";

import { DateToRememberLogo, LandingBackdrop } from "../../public";

import { BrunoAceFont } from "../../font";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			<NavBar />

			{/* Hero Section */}
			<div
				className={clsx(
					"relative w-full h-[600px] bg-black",
					"lg:h-screen"
				)}
			>
				<Image
					src={LandingBackdrop}
					alt="Buddies Fashion Mr and Miss India Runaway Model"
					className={clsx(
						"h-[80%] w-fit absolute bottom-0 right-0",
						"lg:h-[90%] lg:right-[110px]"
					)}
				/>
				{/* <Image
					priority
					placeholder="blur"
					src={RampWalkImage}
					alt="Ramp walk"
					layout="fill"
				/> */}

				{/* Headers and sub-headers */}
				<div
					className={clsx(
						"z-50 absolute top-[45%] left-1/2 -translate-y-7 -translate-x-1/2 flex flex-col items-center",
						"lg:-translate-y-[50%]"
					)}
				>
					<Image
						src={DateToRememberLogo}
						alt="Date to remember mtv mr and miss india runway logo"
						className={clsx(
							"h-[160px] w-[200px] mb-3",
							"lg:h-[300px] lg:w-[400px] lg:translate-x-0"
						)}
					/>
					<Animated />
					<div
						className={clsx(
							"pt-12 text-xs flex flex-col items-center",
							"lg:text-base lg:flex-row"
						)}
					>
						<Link
							href={"/about-event"}
							className="ml-5 font-bold text-base text-black underline underline-offset-4 mb-5 md:text-white lg:mb-0 lg:text-xl lg:mr-10"
						>
							What is MTV D2R?
						</Link>
						<EventCallToAction />
					</div>
				</div>

				{/* <div
					style={{
						fontFamily: BrunoAceFont.style.fontFamily,
					}}
					className="absolute top-[80%] left-[5%] flex items-center justify-center"
				>
					<p className="text-[32px]">05</p>
					<div className="bg-white h-px w-20 mx-3"></div>
					<p className="text-8xl">01</p>
				</div> */}

				{/* Scroll animation */}
				{/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
					<ScrollElement />
				</div> */}

				{/* Social links */}
				<div
					className={clsx(
						"absolute bottom-10 h-fit left-[5%] flex flex-col justify-between items-center",
						"lg:top-[65%]"
					)}
				>
					<SocialLinks />
				</div>
			</div>

			{/* What is MTV */}
			<WhatIsMtv />

			<EventsAudition />

			{/* Latest Stories */}
			<LatestStories />

			{/* Members */}
			<MembersLanding />

			{/* Info section */}
			<Information />

			<Footer />
		</div>
	);
}
