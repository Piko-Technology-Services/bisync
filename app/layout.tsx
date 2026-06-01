import type { Metadata } from "next";
import Script from "next/script";

// import "./globals.css";

import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";

import "./css/bootstrap.min.css";
import "./css/style.css";
import Footer from "./components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BISYNC Networks & Security (Z) Limited",
  description:
    "Reliable ICT, Networking & Security Solutions for Modern Businesses in Zambia. CCTV systems, access control, structured cabling, and IT infrastructure services.",

  keywords: [
    "CCTV Zambia",
    "ICT Solutions Zambia",
    "Security Systems Zambia",
    "Networking Company Zambia",
    "Access Control Zambia",
    "Structured Cabling Ndola",
    "BISYNC Networks",
  ],

  metadataBase: new URL("https://www.bisyncnetworks.com"), // 🔴 CHANGE THIS

  openGraph: {
    title: "BISYNC Networks & Security (Z) Limited",
    description:
      "Reliable ICT, Networking & Security Solutions for Modern Businesses in Zambia.",
    url: "https://www.bisyncnetworks.com/",
    siteName: "BISYNC Networks & Security (Z) Limited",
    images: [
      {
        url: "/logo.png", // 🔴 create this image in /public/img/
        width: 1200,
        height: 630,
        alt: "BISYNC Networks & Security",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BISYNC Networks & Security (Z) Limited",
    description:
      "ICT, Networking & Security Solutions in Zambia",
    images: ["/img/logo.png"],
  },

  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/img/logo.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Bootstrap Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}

        <Footer />
        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>


        {/* Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          strategy="beforeInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/counterup/counterup.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}