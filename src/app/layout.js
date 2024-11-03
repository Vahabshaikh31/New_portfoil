import localFont from "next/font/local";
import "./globals.css";
import { FloatingNavDemo } from "@/components/navigationBar";
import Head from "next/head"; // Import Head from next/head

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const iceland = localFont({
  src: "../../public/fonts/iceland-latin-400-normal.woff",
  variable: "--font-geist-iceland",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Abdulvahab's Portfolio",
  description:
    "My Name is Abdulvahab , I'm a software engineer with a passion for building scalable and efficient systems. this website is designed by me and it shows my ability  to build a responsive and user-friendly website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/public/assets/Untitled (2).ico
        " /> {/* Add your favicon here */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${iceland.variable} antialiased`}
      >
        <FloatingNavDemo />
        {children}
      </body>
    </html>
  );
}
