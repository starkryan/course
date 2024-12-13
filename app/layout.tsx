import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Ethical Hacking with AI - Master Cybersecurity",
  description: "Master ethical hacking and cybersecurity with AI-powered tools and techniques. Learn penetration testing, threat detection, and security automation.",
  keywords: [
    "ethical hacking",
    "cybersecurity",
    "AI security",
    "penetration testing",
    "security automation",
    "ethical hacker course",
    "cybersecurity training",
    "AI-powered security",
    "network security",
    "security certification"
  ],
  authors: [{ name: "David Lee" }],
  openGraph: {
    title: "Ethical Hacking with AI - Master Cybersecurity",
    description: "Master ethical hacking and cybersecurity with AI-powered tools and techniques.",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Ethical Hacking with AI Course",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethical Hacking with AI - Master Cybersecurity",
    description: "Master ethical hacking and cybersecurity with AI-powered tools and techniques.",
    images: ["/og-image.jpg"], // Same as OG image
  },
  metadataBase: new URL("https://yourdomain.com"),  // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
