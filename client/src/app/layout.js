"use client";
import TopNavBar from "@/layouts/TopNavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/store/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tunning",
  description: "A project to purpose changes in entity",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const noNav = ["/login", "/signup", "/forgetpassword"];

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {!noNav.includes(pathname) && <TopNavBar />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
