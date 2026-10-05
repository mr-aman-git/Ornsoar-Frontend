import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GTM from "./GTM";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ornsoar Abroad Job",
    template: "%s | Ornsoar",
  },
  description: "Study MBBS abroad with expert guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7MZ9_PMac1kdpQyctEqmuLI3ayaSYw7mRZD_O7YkLiI"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GTM />
      </body>
    </html>
  );
}
