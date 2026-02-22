import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goa Event Architects — Premier Event Management",
  description:
    "Orchestrating unforgettable moments on the golden shores of Goa. Weddings, cultural ceremonies, corporate events, and social gatherings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-light text-obsidian font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
