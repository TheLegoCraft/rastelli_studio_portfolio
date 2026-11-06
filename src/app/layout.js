import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import BackgroundVideo from "@/components/BackgroundVideo";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DESIGN BUILD TEST | Francesco Rastelli",
  description: "2026 Portfolio of Francesco Rastelli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body suppressHydrationWarning>
        <BackgroundVideo />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
