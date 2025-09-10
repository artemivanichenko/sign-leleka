import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
	variable: "--font-roboto",
	display: "swap",
});

const title = "NoteHub App";
const description =
	"NoteHub is a simple and efficient application designed for managing personal notes";

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		url: "https://notehub.com/",
		siteName: "NoteHub",
		images: [
			{
				url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
				width: 1200,
				height: 630,
				alt: title,
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		images: ["https://ac.goit.global/fullstack/react/og-meta.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable}`}>
				<TanStackProvider>
					<AuthProvider>{children}</AuthProvider>
				</TanStackProvider>
			</body>
		</html>
	);
}
