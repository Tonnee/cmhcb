import type { Metadata } from "next";
import {Marcellus, DM_Sans} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const marcellus = Marcellus({
    subsets: ["latin"],
    weight: "400", // Marcellus only has 400
    variable: "--font-marcellus",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "CHMC,B",
    description: "Center for Mental Health and Care, Bangladesh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${marcellus.variable} ${dmSans.variable} antialiased`}>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
