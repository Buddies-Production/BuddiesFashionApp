import { LOCATION_VENUE_DATE } from "@/lib/constants";
import clsx from "clsx";

export default function EventAuditionDetails() {
	return (
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
				Audition for Mr and Miss India Runway model will be taken in the
				following cities
			</p>

			<div className={clsx("mt-5 w-full", "lg:mt-16 lg:w-[80%]")}>
				<div
					className={clsx(
						"flex w-full justify-between text-lg font-bold",
						"lg:text-5xl"
					)}
				>
					<p className="pl-5 w-[200px]">Location</p>
					<p className="text-center w-[250px]">Venues</p>
					<p
						className={clsx(
							"w-[100px] text-center",
							"lg:w-[200px]"
						)}
					>
						Dates
					</p>
					<p className={clsx("hidden", "lg:block")}>Timings</p>
				</div>

				{LOCATION_VENUE_DATE.map((prop, idx) => {
					return (
						<div
							key={idx}
							className={clsx(
								"flex w-full justify-between text-base mt-5",
								"lg:text-3xl"
							)}
						>
							<p className="w-[200px]">❖ {prop.location}</p>
							<p className={clsx("w-[250px] text-center")}>
								{prop.venue}
							</p>
							<p
								className={clsx(
									"w-[100px] text-center",
									"lg:w-[200px]"
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
	);
}
