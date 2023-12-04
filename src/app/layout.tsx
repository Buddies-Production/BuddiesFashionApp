import "./globals.css";
import type { Metadata } from "next";

import { ReduxProvider } from "@/store/provider";

import { Tinos } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
	title: "MTV D2R Season 2",
	description: "MTV D2R Season 2 Mr & Miss India Runway Model",
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

							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "j6qv0r8773");

							!function(f,b,e,v,n,t,s){
							if(f.fbq)return;n=f.fbq=function(){n.callMethod?
							n.callMethod.apply(n,arguments):n.queue.push(arguments)};
							if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
							n.queue=[];t=b.createElement(e);t.async=!0;
							t.src=v;s=b.getElementsByTagName(e)[0];
							s.parentNode.insertBefore(t,s)}(window, document,'script',
							'https://connect.facebook.net/en_US/fbevents.js');
							fbq('init', '524680719874696');
							fbq('track', 'PageView');

							(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
							{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
							a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
							r.src=n;var u=t.getElementsByTagName(s)[0];
							u.parentNode.insertBefore(r,u);})(window,document,
							'https://sc-static.net/scevent.min.js');
							
							snaptr('init', 'a56a50ce-ccb3-48a7-a2e4-76c008621452', {
							'user_email': '_INSERT_USER_EMAIL_'
							});
							
							snaptr('track', 'PAGE_VIEW');
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
