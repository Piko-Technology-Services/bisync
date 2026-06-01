"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import NetworkBackground from "./components/NetworkBackground";
import AboutSection from "./sections/AboutSection";
import FactsSection from "./sections/FactsSections";
import ServicesSection from "./sections/ServicesSection";
import FeatureSection from "./sections/FeatureSection";
import ProjectsSection from "./sections/ProjectsSection";
import QuoteSection from "./sections/QuoteSection";
import TestimonialSection from "./sections/TestimonialSection";


export default function Home() {
  useEffect(() => {
    const initCarousel = () => {
      const $ = window.jQuery;

      if (!$.fn?.owlCarousel) return false;

      const el = $(".header-carousel");

      if (el.length && !el.hasClass("owl-loaded")) {
        el.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          smartSpeed: 1000,
          dots: true,
          nav: false,
        });
      }

      return true;
    };

    const interval = setInterval(() => {
      if (initCarousel()) clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* <!-- Spinner Start --> */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}


      <Navbar />

      {/* HERO WRAPPER (KEY FIX) */}
      <div className="hero-wrapper">



        {/* 🎠 CAROUSEL (ABOVE BACKGROUND) */}
        <div className="hero-content">
          <div className="owl-carousel header-carousel position-relative">

            {/* SLIDE 1 - HERO INTRO */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-1.jpg" alt="slide 1" />

              <NetworkBackground />

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">

                    <h1 className="display-3 text-white mb-3">
                      <entity type="organization">BISYNC Networks & Security (Z) Limited</entity>
                    </h1>

                    <p className="fs-5 text-white mb-4">
                      Reliable ICT, Networking & Security Solutions for Modern Businesses
                    </p>

                    <p className="text-white mb-4">
                      We design, install, and maintain secure and scalable technology infrastructure —
                      from CCTV systems and structured cabling to access control and multimedia solutions.
                    </p>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <a href="#quote" className="btn btn-primary px-4 py-2">
                        Request a Quote
                      </a>
                      <a href="#services" className="btn btn-outline-light px-4 py-2">
                        Explore Our Services
                      </a>
                      <a href="#about" className="btn btn-light px-4 py-2">
                        About Us
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2 - SERVICES OVERVIEW */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-2.jpg" alt="slide 2" />

              <NetworkBackground />

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">

                    <h1 className="display-3 text-white mb-4">
                      Complete ICT & Security Solutions
                    </h1>

                    <p className="fs-5 text-white mb-3">
                      Networking • CCTV Systems • Access Control • Electrical Supply • VoIP Systems
                    </p>

                    <p className="text-white">
                      We deliver end-to-end technology solutions tailored for offices, factories,
                      institutions, and commercial environments across Zambia.
                    </p>

                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3 - WHY CHOOSE US */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-3.jpg" alt="slide 3" />

              <NetworkBackground />

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">

                    <h1 className="display-3 text-white mb-4">
                      Secure. Reliable. Professional.
                    </h1>

                    <p className="fs-5 text-white mb-3">
                      Experienced ICT professionals delivering quality-driven solutions
                    </p>

                    <p className="text-white">
                      Trusted by organizations across multiple industries for long-term support,
                      competitive pricing, and dependable project delivery.
                    </p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <FactsSection />
      <AboutSection />
      <ServicesSection />
      <FeatureSection />
      <ProjectsSection />
      <QuoteSection />
      <TestimonialSection />



    </>
  );
}