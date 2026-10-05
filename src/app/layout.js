import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DESIGN TEST BUILD | Francesco Rastelli",
  description: "2026 Portfolio of Francesco Rastelli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
