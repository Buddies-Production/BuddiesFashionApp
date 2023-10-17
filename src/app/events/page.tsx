import clsx from "clsx";
import { NavBar } from "../components/client";
import { EventCallToAction, Footer } from "../components/server";
import Image from "next/image";
import { EventsAuditionOne, EventsAuditionTwo } from "../../../public";
import { LOCATION_VENUE_DATE } from "@/lib/constants";
import EventAuditionDetails from "../components/server/EventAuditionDetails/EventAuditionDetails";

export default function Events() {
	return (
		<div className="h-screen w-screen relative">
			<NavBar />
			<div
				className={clsx(
					`bg-black w-full pt-[150px] py-[50px] px-[30px] relative`,
					"lg:px-[58px] lg:pt-[200px] lg:pb-[111px]"
				)}
			>
				<div className="absolute top-0 right-0 flex h-full w-[50%]">
					<div className={clsx("h-full w-[100%]", "lg:w-[50%]")}>
						<Image
							src={EventsAuditionOne}
							alt="male model pose for events and auditions"
							className="h-full w-full opacity-20"
							style={{
								objectFit: "cover",
							}}
						/>
					</div>
				</div>

				<div
					className={clsx(
						"absolute bottom-0 right-36 opacity-0",
						"lg:h-[90%] lg:w-[250px] lg:opacity-100"
					)}
				>
					<Image
						src={EventsAuditionTwo}
						alt="female model pose for events and auditions"
						className="h-full w-full opacity-20"
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
				<EventAuditionDetails />
				<div className="pt-10">
					<p className="text-lg lg:text-2xl">
						For more information contact us at{" "}
						<span className="font-bold whitespace-nowrap">
							+91 93101-70380,{" "}
						</span>
						<span className="font-bold whitespace-nowrap">
							+91 78278-01756
						</span>
					</p>
					<div
						className={clsx(
							"pt-10 text-xs w-full flex justify-center",
							"lg:text-base"
						)}
					>
						<EventCallToAction text="REGISTER NOW" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const EventDateItem = (props: {
	title: string;
	startDate: string;
	endDate: string;
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				"flex flex-col items-center mt-[100px]",
				props.className
			)}
		>
			<div className={clsx("text-[32px]", "lg:text-[42px]")}>
				{props.title}
			</div>
			<div
				className={clsx(
					"h-[67px] text-[26px] relative flex items-center w-full border-l-[1px] border-r-[1px] border-white",
					"lg:text-[36px]"
				)}
			>
				<div className="w-full h-px bg-white" />
				<p
					className={clsx(
						"absolute -bottom-10 -left-5",
						"lg:-bottom-12 lg:-left-10"
					)}
				>
					{props.startDate}
				</p>
				<p
					className={clsx(
						"absolute -bottom-10 -right-5",
						"lg:-bottom-12 lg:-right-10"
					)}
				>
					{props.endDate}
				</p>
			</div>
		</div>
	);
};
