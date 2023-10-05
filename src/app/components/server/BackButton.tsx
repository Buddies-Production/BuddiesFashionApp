import clsx from "clsx";
import Link from "next/link";

interface BackButtonProps {
	linkTo: string;
	title?: string;
	borderNone?: boolean;
}

export default function BackButton(props: BackButtonProps) {
	return (
		<Link
			href={props.linkTo}
			className={clsx(
				"absolute top-5 left-10 flex justify-between border border-white px-3 py-2 rounded min-w-24 max-w-max",
				"transition-colors duration-500"
			)}
			style={{
				border: props.borderNone ? "0" : "1px",
			}}
		>
			<svg
				className={clsx(
					"with-icon_icon__MHUeb",
					"transition-colors duration-500"
				)}
				data-testid="geist-icon"
				fill="none"
				height="24"
				shape-rendering="geometricPrecision"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				width="24"
			>
				<path d="M19 12H5" />
				<path d="M12 19l-7-7 7-7" />
			</svg>
			<p className={clsx("transition-colors duration-500 pl-3")}>
				{props.title ?? "BACK"}
			</p>
		</Link>
	);
}
