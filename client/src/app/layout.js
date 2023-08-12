import TopNavBar from "@/layouts/TopNavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tunning",
  description: "A project to purpose changes in entity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar />
        {children}
      </body>
    </html>
  );
}
