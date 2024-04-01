//import from libraries
import type { Metadata } from "next";
import { Dela_Gothic_One, Roboto } from "next/font/google";

//internal imports
import "./globals.scss";
import Provider from "@/components/wrappers/Provider";

//optimization of fonts
const delatGothicOne = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

//metadata
export const metadata: Metadata = {
  title: "Grafit.Athletic",
  description: "Site of ukrainian gyms, Grafit.Athletic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${roboto.variable} ${delatGothicOne.variable}`}
      >
        <div id="menu"></div>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
