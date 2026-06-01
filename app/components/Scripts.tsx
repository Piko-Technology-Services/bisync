import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* jQuery */}
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="beforeInteractive"
      />

      {/* Bootstrap */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/wow/wow.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/easing/easing.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/waypoints/waypoints.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/counterup/counterup.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/owlcarousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/isotope/isotope.pkgd.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/lib/lightbox/js/lightbox.min.js"
        strategy="afterInteractive"
      />

      {/* Custom JS */}
      <Script
        src="/js/main.js"
        strategy="lazyOnload"
      />
    </>
  );
}