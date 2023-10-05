import "./globals.css";
import type { Metadata } from "next";

import { BrunoAceFont } from "../../font";
import { ReduxProvider } from "@/store/provider";

import { Tinos } from "next/font/google";

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
