"use client";

// import Image from "next/image";
// import { BuddiesLogo, BurgerMenu } from "../../../../../public";
// import clsx from "clsx";

export default function BuddiesBanner() {
	return (
		<div
			className="w-full flex items-center justify-center relative"
			// onClick={() => {
			// 	window.open("https://www.buddiesproductions.com/", "_blank");
			// }}
		>
			{/* <Image
				src={BuddiesLogo}
				alt="Buddies Production Logo"
				className={clsx(
					"h-10 w-16 absolute top-5 left-5",
					"lg:h-20 lg:w-28 lg:top-10 lg:left-10"
				)}
			/> */}
			<video src={require("./video.mp4")} autoPlay muted loop />
		</div>
	);
}
