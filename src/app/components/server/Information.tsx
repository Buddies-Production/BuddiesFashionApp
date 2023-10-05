import clsx from "clsx";

import Image, { StaticImageData } from "next/image";

import {
	LandingInformationOne,
	LandingInformationTwo,
	LandingInformationThree,
} from "../../../../public";
import Link from "next/link";

export default function Information() {
	return (
		<div
			className={clsx(
				"w-full bg-white flex flex-col justify-center items-center py-7",
				"lg:px-10 lg:flex-row"
			)}
		>
			<InformationImage
				image={LandingInformationOne}
				alt="Media Logo"
				text="Media"
				link="/media"
			/>
			<InformationImage
				image={LandingInformationTwo}
				alt="Events Logo"
				text="Events"
				className="lg:ml-16 my-4"
				link="/events"
			/>
			{/* <InformationImage
				image={LandingInformationThree}
				alt="Members Logo"
				text="Members"
				objectPosition="20%"
			/> */}
		</div>
	);
}

interface Props {
	image: StaticImageData;
	text: string;
	alt: string;
	objectPosition?: string;
	className?: string;
	link: string;
}

const InformationImage = (props: Props) => {
	return (
		<div
			className={clsx(
				"group h-[221px] w-[85%] flex-grow overflow-hidden cursor-pointer relative rounded-[4px]",
				"lg:h-[441px] lg:w-[586px]",
				props.className
			)}
		>
			<Link href={props.link}>
				<Image
					src={props.image}
					alt={props.alt}
					style={{
						height: "100%",
						objectFit: "cover",
						objectPosition: `${props.objectPosition ?? "50%"} 50%`,
					}}
					className="transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="h-full w-full bg-[#292929ab] z-[99] absolute top-0 left-0" />
				<div
					className={clsx(
						"w-full font-bold absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 text-2xl text-[#ffff] flex items-center justify-between px-6",
						"lg:text-[64px]"
					)}
				>
					<p>{props.text}</p>
					<div className="w-full h-px bg-white ml-2" />
				</div>
			</Link>
		</div>
	);
};
