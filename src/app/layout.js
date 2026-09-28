import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Until We Meet Again",
  description: "A little something I made just for you... because I miss you.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col select-none bg-white">{children}</body>
    </html>
  );
}
