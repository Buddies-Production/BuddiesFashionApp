import Image from "next/image";
import Link from "next/link";

import {
	LandingFb,
	LandingInsta,
	LandingLinkedin,
	LandingTwitter,
	LandingYoutube,
} from "../../../../public";
import clsx from "clsx";

export default function SocialLinks() {
	return (
		<>
			{/* <Link href={"https://www.facebook.com"} target="_blank">
				<Image
					src={LandingFb}
					alt="facebook link"
					width={"20"}
					height={"36"}
					className={clsx(
						"h-5 w-5 cursor-pointer transition-transform duration-500 hover:scale-125",
						"lg:h-[36px] lg:w-[20px]"
					)}
				/>
			</Link> */}
			{/* <Link href={"https://www.twitter.com"} target="_blank">
				<Image
					src={LandingLinkedin}
					alt="twitter link"
					width={"25"}
					height={"42"}
					className={clsx(
						"h-5 w-5 cursor-pointer transition-transform duration-500 hover:scale-125 bg-red-400",
						"lg:h-[36px] lg:w-[20px]"
					)}
				/>
			</Link> */}
			<Link
				href={"https://www.instagram.com/d2rmrandmissindia/"}
				target="_blank"
			>
				<Image
					src={LandingInsta}
					alt="instagram link"
					className={clsx(
						"h-5 w-4 cursor-pointer transition-transform duration-500 hover:scale-125",
						"lg:h-[50px] lg:w-[40px]"
					)}
				/>
			</Link>
			<Link
				href={"https://www.youtube.com/@D2RMrMissIndia"}
				target="_blank"
				className="mt-5"
			>
				<Image
					src={LandingYoutube}
					alt="youtube link"
					className={clsx(
						"h-5 w-5 cursor-pointer transition-transform duration-500 hover:scale-125",
						"lg:h-[50px] lg:w-[50px]"
					)}
				/>
			</Link>
		</>
	);
}
