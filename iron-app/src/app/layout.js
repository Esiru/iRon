
import { Inter } from "next/font/google";
import "./page.css";
import Navbar from "./navbar/navbar";
// import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iRon",
  description: "The workout tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
