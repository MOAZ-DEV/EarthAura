import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EarthAura | Nasa Space App",
  description: "Built for Nasa Space App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
