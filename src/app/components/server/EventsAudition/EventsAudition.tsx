import clsx from "clsx";
import EventCallToAction from "../EventCallToAction/EventCallToAction";
import Image from "next/image";
import { EventsAuditionOne, EventsAuditionTwo } from "../../../../../public";
import { LOCATION_VENUE_DATE } from "@/lib/constants";
import EventAuditionDetails from "../EventAuditionDetails/EventAuditionDetails";

export default function EventsAudition() {
	return (
		<div
			className={clsx(
				`bg-black w-full py-[50px] px-[30px] relative`,
				"lg:px-[58px] lg:pt-[78px] lg:pb-[111px]"
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
				<p className="text-xl lg:text-2xl">
					For more information contact us at{" "}
					<span className="font-bold">+91 93101-70380, </span>
					<span className="font-bold">+91 78278-01756</span>
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
	);
}
