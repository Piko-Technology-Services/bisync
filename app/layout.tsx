import type { Metadata } from "next";
import Script from "next/script";

// import "./globals.css";

import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";

import "./css/bootstrap.min.css";
import "./css/style.css";
import Footer from "./components/Footer";
import { LoaderProvider } from "./components/LoaderProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bisyncnetworks.com"),

  title: {
    default: "BISYNC Networks & Security (Z) Limited",
    template: "%s | BISYNC Networks & Security",
  },

  description:
    "Leading ICT, Networking and Security Systems provider in Zambia. Structured Cabling, CCTV, Access Control, Electric Fencing, VoIP, Multimedia Production and IT Infrastructure Solutions.",

  applicationName: "BISYNC Networks & Security",

  keywords: [
    "ICT Zambia",
    "Security Systems Zambia",
    "CCTV Installation Zambia",
    "Structured Cabling Zambia",
    "Fiber Installation Zambia",
    "Access Control Zambia",
    "Electric Fencing Zambia",
    "VoIP Zambia",
    "Network Installation Zambia",
    "BISYNC Networks",
    "Ndola Security Systems",
    "Zambia CCTV Company",
  ],

  authors: [
    {
      name: "BISYNC Networks & Security (Z) Limited",
    },
  ],

  creator: "BISYNC Networks & Security (Z) Limited",

  publisher: "BISYNC Networks & Security (Z) Limited",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  alternates: {
    canonical: "https://www.bisyncnetworks.com",
  },

openGraph: {
  title: "BISYNC Networks & Security (Z) Limited",
  description:
    "Reliable ICT, Networking & Security Solutions for Modern Businesses in Zambia.",
  images: [
    {
      url: "https://bisync.vercel.app/logo.png",
      width: 1200,
      height: 630,
      alt: "BISYNC Networks & Security",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  images: ["https://bisync.vercel.app/logo.png"],
},


  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <link rel="icon" href="logo.png" />

        <title>BISYNC Networks & Security (Z) Limited</title>

<meta name="description" content="Leading ICT, Networking and Security Systems provider in Zambia. Structured Cabling, CCTV, Access Control, Electric Fencing, VoIP, and IT Infrastructure Solutions." />

<meta name="keywords" content="ICT Zambia, CCTV Installation Zambia, Structured Cabling Zambia, Access Control Zambia, Networking Zambia, Electric Fencing Zambia, BISYNC Networks" />

<meta name="author" content="BISYNC Networks & Security (Z) Limited" />

<meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
<meta property="og:title" content="BISYNC Networks & Security (Z) Limited" />
<meta property="og:description" content="Reliable ICT, Networking & Security Solutions for Modern Businesses in Zambia." />
<meta property="og:url" content="https://bisync.vercel.app" />
<meta property="og:site_name" content="BISYNC Networks & Security" />
<meta property="og:image" content="https://bisync.vercel.app/logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_ZM" />

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

        <LoaderProvider>
 {children}

  <Footer />

        </LoaderProvider>
       

       
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