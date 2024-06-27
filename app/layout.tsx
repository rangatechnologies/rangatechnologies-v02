import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Premier Blockchain Solutions",
  description:
    "Cutting-Edge Blockchain Technology. Secure. Scalable. Revolutionary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} mx-auto flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex-1 bg-[#020000]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
