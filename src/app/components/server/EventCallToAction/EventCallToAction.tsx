import clsx from "clsx";
import Link from "next/link";

const EventCallToAction = (props: { text?: string }) => {
	return (
		<Link
			href="/event-registration"
			className={clsx(
				"relative inline-flex items-center justify-start py-3 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group pl-4 pr-12"
				// "lg:text-white"
			)}
		>
			<span
				className={clsx(
					"absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full",
					"lg:bg-white"
				)}
			></span>
			<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
				<svg
					className="w-5 h-5 text-black"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					></path>
				</svg>
			</span>
			<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
				<svg
					className="w-5 h-5 text-black"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					></path>
				</svg>
			</span>
			<span
				className={clsx(
					"relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white",
					" lg:group-hover:text-black"
				)}
			>
				{props.text ? props.text : "REGISTER"}
			</span>
		</Link>
	);
};

export default EventCallToAction;
