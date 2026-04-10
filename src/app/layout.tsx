import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Simple Plan | Retirement Planning for Canadians",
  description:
    "Helping affluent Canadians 50+ navigate retirement with clarity and confidence. Get your free Retirement Score and build a plan you understand.",
  keywords: [
    "retirement planning",
    "financial advisor",
    "Canada",
    "retirement score",
    "tax optimization",
    "estate planning",
    "Kelowna",
    "Brad MacBeth",
  ],
  openGraph: {
    title: "The Simple Plan | Retirement Planning for Canadians",
    description:
      "Do you know where you stand for retirement? Get your free Retirement Score in 2 minutes.",
    url: "https://getthesimpleplan.com",
    siteName: "The Simple Plan",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
