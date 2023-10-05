import clsx from "clsx";

export default function BuddiesBanner() {
	return (
		<div
			className={clsx(
				"w-full flex items-center justify-center relative h-[400px]",
				"lg:h-[600px]"
			)}
		>
			<iframe
				className="w-full h-full"
				src="https://www.youtube.com/embed/WtR7jqnSYI0?si=YOOzjvAFGtab7a7x"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
}
