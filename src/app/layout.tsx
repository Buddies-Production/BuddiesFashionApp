import "./globals.css";
import type { Metadata } from "next";

import { ReduxProvider } from "@/store/provider";

import { Tinos } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Buddies Fashion",
	description: "Buddies Production Mr and Miss India Runway model",
};

const TinosFont = Tinos({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* <head>
				<Script
					id="clarity"
					dangerouslySetInnerHTML={{
						__html: ((
							c: any,
							l: Document,
							a: string,
							r: string,
							i: string,
							t: HTMLScriptElement,
							y: Element
						) => {
							c[a] =
								c[a] ||
								function (...args: any[]) {
									(c[a].q = c[a].q || []).push(args);
								};
							t = l.createElement(r) as any;
							t.async = 1 as any;
							t.src = `https://www.clarity.ms/tag/${i}`;
							y = l.getElementsByTagName(r)[0] as Element;
							y.parentNode?.insertBefore(t, y);
						})(
							window,
							document,
							"clarity",
							"script",
							"j5vuarxglj",
							document.createElement("script"),
							document.querySelector("script") as any
						) as any,
					}}
				/>
			</head> */}
			<body
				style={{
					fontFamily: TinosFont.style.fontFamily,
				}}
			>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
