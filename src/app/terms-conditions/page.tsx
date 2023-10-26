import clsx from "clsx";
import { NavBar } from "../components/client";
import { Footer, TermsAndConditions } from "../components/server";

export default function TermsConditions() {
	return (
		<div className="h-screen w-screen relative">
			<NavBar />
			<div className={clsx("px-[30px] pt-40 pb-28", "lg:px-16")}>
				<div className="w-full flex justify-between items-center">
					<p
						className={clsx(
							"whitespace-nowrap text-[32px]",
							"lg:text-[64px]"
						)}
					>
						Terms & Conditions
					</p>
					<div
						className={clsx(
							"w-full h-px ml-5 bg-white",
							"lg:ml-12"
						)}
					/>
				</div>
				<div
					className={clsx(
						"flex justify-center items-center text-sm mt-10",
						"lg:text-2xl"
					)}
				>
					<p>
						<TermsAndConditions />
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
