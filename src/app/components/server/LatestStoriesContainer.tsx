import clsx from "clsx";
import Image from "next/image";

export default function LatestStoriesContainer() {
	const ImageArray = [
		{
			imgSrc: "https://i.ibb.co/k0bZPxc/ethnic-boy-1-1st.jpg",
			objectPosition: "50% 5%",
		},
		{
			imgSrc: "https://i.ibb.co/P9H8w1c/ethnic-boy-1-2nd.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/dpFVKxF/ethnic-boy-2-1st.jpg",
			objectPosition: "50% 0%",
		},
		{
			imgSrc: "https://i.ibb.co/ydYfSG1/ethnic-boy-2-2nd.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/8zt82BG/ethnic-girl-1-1st.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/XXF4jSL/ethnic-girl-1-2nd.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/bK238TN/ethnic-girl-2-1st.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/kgmx4Sr/ethnic-girl-2-2nd.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/4Tg2Wqg/formal-boy-1-1st.jpg",
			objectPosition: "50% 10%",
		},
		{
			imgSrc: "https://i.ibb.co/pxy02J4/formal-boy-1-2nd.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/YWDTLxp/formal-girl-1-1st.jpg",
			objectPosition: "50% 20%",
		},
		{
			imgSrc: "https://i.ibb.co/WWdfsx6/formal-girl-1-2nd.jpg",
			objectPosition: "50% 20%",
		},
	];

	return (
		<div className="grid grid-cols-4 w-full justify-between">
			{ImageArray.map((img, idx) => {
				return (
					<div
						key={idx}
						className={clsx(
							"group h-[300px] relative overflow-hidden cursor-pointer border border-white",
							"lg:h-[300px] lg:w-full"
						)}
					>
						<Image
							src={img.imgSrc}
							alt="Fashion story"
							fill
							style={{
								objectFit: "cover",
								objectPosition: `${img.objectPosition}`,
							}}
							className={clsx(
								"transition-transform duration-500 group-hover:scale-110"
							)}
						/>
						{/* <div className="absolute top-0 bg-[#890304] h-full w-full opacity-40" /> */}
					</div>
				);
			})}
		</div>
	);
}
