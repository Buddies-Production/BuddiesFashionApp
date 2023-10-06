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
			<head>
				<Script
					id="clarity"
					dangerouslySetInnerHTML={{
						__html: `
							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "j6fsjr846g");
						`,
					}}
				/>
				<Script
					id="tawkTo"
					dangerouslySetInnerHTML={{
						__html: `
							var Tawk_API = Tawk_API || {};
							var Tawk_LoadStart = new Date();
							(function () {
								var s1 = document.createElement("script"),
								s0 = document.getElementsByTagName("script")[0];
								s1.async = true;
								s1.src = 'https://embed.tawk.to/65203e84eb150b3fb99ed432/1hc2v8e09';
								s1.charset = 'UTF-8';
								s1.setAttribute('crossorigin', '*');
								s0.parentNode.insertBefore(s1, s0);
							})();
						`,
					}}
				/>
			</head>
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
