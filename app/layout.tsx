import './globals.css'
import {
  //Inter,
  Courier_Prime,
} from "next/font/google";
import Navbar from './components/Navbar';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })
const courier = Courier_Prime({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "Jiří Vecko - Portfolio",
  description:
    "Personal website of Jiří Vecko, showcasing projects and experience.",
  openGraph: {
    title: "Jiří Vecko - Portfolio",
    description: "Explore my projects in software development.",
    url: "https://www.jirivecko.cz",
    siteName: "Jiří Vecko",
    images: [
      {
        url: "https://www.jirivecko.cz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fji%C5%99%C3%AD_vecko_logo_PNG.3bc95234.png&w=1080&q=75",
        alt: "Jiří Vecko - Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/jiri_vecko.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={courier.className}>
      <head>
        <title>Jiří Vecko</title>
      </head>
      <body className="min-h-full w-full bg-gradient-to-b from-black to-slate-500">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
