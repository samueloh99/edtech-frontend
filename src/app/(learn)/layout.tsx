import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

export const fontsPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>dadas</nav>
      {children}
    </section>
  );
}