import clsx from "clsx";
import { NavBar } from "../components/client";
import { Footer } from "../components/server";
import Image from "next/image";
import { MediumLogoSvg } from "../../../public";
import Link from "next/link";

export default function Blogs() {
	return (
		<div className="bg-black">
			<NavBar />
			<div className={clsx("px-[30px] py-40", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p
						className={clsx(
							"text-[32px] whitespace-nowrap",
							"lg:text-[64px]"
						)}
					>
						Blogs
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>

				<div className="flex flex-col items-center justify-center h-96">
					<div
						className={clsx(
							"w-full flex items-center justify-between border border-white px-5 py-3",
							"lg:py-10"
						)}
					>
						<Link
							href={
								"https://medium.com/@d2rmrmissindia/the-models-toolkit-for-success-grooming-charisma-and-health-643d1926309c"
							}
							className={clsx("h-10 w-20", "lg:h-20 lg:w-32")}
						>
							<Image
								src={MediumLogoSvg}
								alt="Medium svg for website"
								className="h-full w-full bg-white rounded"
							/>
						</Link>
						<Link
							href={
								"https://medium.com/@d2rmrmissindia/the-models-toolkit-for-success-grooming-charisma-and-health-643d1926309c"
							}
							className={clsx(
								"text-white text-base font-bold mx-5",
								"lg:text-2xl"
							)}
						>
							The Model’s Toolkit for Success: Grooming, Charisma,
							and Health
						</Link>
						<Link
							href={
								"https://medium.com/@d2rmrmissindia/the-models-toolkit-for-success-grooming-charisma-and-health-643d1926309c"
							}
							className={clsx(
								"text-center bg-white text-black px-2 py-1 text-xs rounded",
								"lg:text-2xl lg:px-3"
							)}
						>
							Click here
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
