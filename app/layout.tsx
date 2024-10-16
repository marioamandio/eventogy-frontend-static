import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "../components/TopNavbar";
import MenuNav from "../components/menu";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Eventogy - Static",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <TopNavBar />
        <MenuNav />
        {children}
      </body>
    </html>
  );
}
