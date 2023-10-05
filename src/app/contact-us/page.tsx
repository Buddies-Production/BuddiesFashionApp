import clsx from "clsx";
import { NavBar } from "../components/client";
import { Footer } from "../components/server";

export default function ContactUs() {
	return (
		<div className="h-screen w-screen relative">
			<NavBar />
			<div className={clsx("px-[30px] py-40", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p
						className={clsx(
							"text-[32px] whitespace-nowrap",
							"lg:text-[64px]"
						)}
					>
						Contact Us
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>

				<div className="mt-10">
					<p className={clsx("font-bold text-3xl", "lg:text-5xl")}>
						Helpline number:
					</p>
					<div
						className={clsx(
							"mt-3 flex flex-col text-2xl font-thin",
							"lg:flex-row lg:text-3xl"
						)}
					>
						<div>
							<p>+91 9310170380</p>
							<p>+91 7827801756</p>
						</div>
						<p className="lg:ml-10">(timings: 11:30am - 8pm)</p>
					</div>
					<p
						className={clsx(
							"mt-10 font-bold text-3xl",
							"lg:text-5xl"
						)}
					>
						Email:
					</p>
					<p
						className={clsx(
							"mt-3 text-2xl font-thin",
							"lg:text-3xl"
						)}
					>
						support@buddiesproductions.com
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
