import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/showcase-navbar";
import Footer from "@/components/footer";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MR Deva International Business and Consultancy Services",
  description: "MR Deva International is your trusted partner for comprehensive consultancy and advisory services across multiple domains.",
  openGraph: {
    images: [
      {
        url: 'https://www.google.com/maps/uv?viewerState=lb&pb=!1s0x11ae81c94242f451:0x2a6b0cac40414137!5sGlobstand+technologies&imagekey=!1e10!2sAF1QipPrTTNGxsOszQTXFD3b68e40o0V_LiVsTWwh-H6&cr=rp_35',
        width: 1200,
        height: 630,
        alt: 'Bird Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
