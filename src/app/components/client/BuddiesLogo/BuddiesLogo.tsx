"use client";

import Image from "next/image";
import { BuddiesLogo } from "../../../../../public";

const BuddiesLogoElement = () => {
	return (
		<Image
			src={BuddiesLogo}
			alt="Buddies Productions Logo"
			className="h-[100px] w-[200px] cursor-pointer"
			onClick={() =>
				window.open("https://www.buddiesproductions.com/", "_blank")
			}
		/>
	);
};

export default BuddiesLogoElement;
