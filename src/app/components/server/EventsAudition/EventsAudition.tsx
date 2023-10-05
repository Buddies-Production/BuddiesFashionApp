import clsx from "clsx";
import EventCallToAction from "../EventCallToAction/EventCallToAction";
import Image from "next/image";
import { EventsAuditionOne, EventsAuditionTwo } from "../../../../../public";

export default function EventsAudition() {
	const LocationVenueDate = [
		{
			location: "Shrinagar",
			venue: "TBA",
			date: "15th October",
			time: "10am to 4pm",
		},
		{
			location: "Jammu",
			venue: "TBA",
			date: "16th October",
			time: "10am to 4pm",
		},
		{
			location: "Ludhiana",
			venue: "TBA",
			date: "17th October",
			time: "10am to 4pm",
		},
		{
			location: "Delhi NCR",
			venue: "TBA",
			date: "19th October",
			time: "10am to 4pm",
		},
		{
			location: "Jaipur",
			venue: "TBA",
			date: "21st October",
			time: "10am to 4pm",
		},
		{
			location: "Indore",
			venue: "TBA",
			date: "24th October",
			time: "10am to 4pm",
		},
		{
			location: "Hyderabad",
			venue: "TBA",
			date: "27th October",
			time: "10am to 4pm",
		},
	];

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
			<div className="w-full h-full">
				<div className="w-full flex items-center">
					<div
						className={clsx(
							"text-2xl font-normal text-white whitespace-nowrap",
							"lg:text-[64px] lg:mb-5"
						)}
					>
						Event Details
					</div>
					<div className="ml-10 h-px w-full bg-white" />
				</div>

				<p
					className={clsx(
						"mt-10 text-lg text-left font-thin",
						"lg:text-4xl"
					)}
				>
					Audition for Mr and Miss India Runway model will be taken in
					the following cities
				</p>

				<div className={clsx("mt-5 w-full", "lg:mt-16 lg:w-[80%]")}>
					<div
						className={clsx(
							"flex w-full justify-between text-lg font-bold",
							"lg:text-5xl"
						)}
					>
						<p className="pl-5">Location</p>
						<p>Venues</p>
						<p>Dates</p>
						<p className={clsx("hidden", "lg:block")}>Timings</p>
					</div>

					{LocationVenueDate.map((prop, idx) => {
						return (
							<div
								key={idx}
								className={clsx(
									"flex w-full justify-between text-base mt-5",
									"lg:text-3xl"
								)}
							>
								<p className="w-[200px]">❖ {prop.location}</p>
								<p
									className={clsx(
										"w-[150px] text-left",
										"lg:text-center"
									)}
								>
									{prop.venue}
								</p>
								<p
									className={clsx(
										"w-[60px] text-center",
										"lg:w-fit"
									)}
								>
									{prop.date}
								</p>
								<p className={clsx("hidden", "lg:block")}>
									{prop.time}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="pt-10">
				<p className="text-xl lg:text-2xl">
					For more information contact us at{" "}
					<span className="font-bold">+91 93101-70380</span>
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
