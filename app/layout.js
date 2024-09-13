import { Rowdies, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

// Specify the weight of Rowdies you want to use
const rowdies = Rowdies({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pray Now",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1
          className={"text-base sm:text-lg textGradient " + rowdies.className}
        >
          Pray Now
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <Link
        href={"https://github.com/iamjohncaleb"}
        target="_blank"
        className=""
      >
        <p
          className={
            "text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500 " +
            rowdies.className
          }
        >
          © 2024 Legendary Consults 👑
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
            opensans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
