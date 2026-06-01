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
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    {/* <!-- Spinner End --> */}


      <Navbar />

      {/* HERO WRAPPER (KEY FIX) */}
      <div className="hero-wrapper">

        

        {/* 🎠 CAROUSEL (ABOVE BACKGROUND) */}
        <div className="hero-content">
          <div className="owl-carousel header-carousel position-relative">

            {/* SLIDE 1 */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-1.jpg" alt="slide 1" />

              {/* 🌐 BACKGROUND (BEHIND EVERYTHING) */}
        <NetworkBackground />

              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h1 className="display-3 text-white mb-4">
                      Best CCTV & Security Solution For You
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
                      Reliable security systems for homes and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-2.jpg" alt="slide 2" />
{/* 🌐 BACKGROUND (BEHIND EVERYTHING) */}
        <NetworkBackground />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h1 className="display-3 text-white mb-4">
                      Smart Security Solutions For Businesses
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div className="owl-carousel-item">
              <img src="/img/carousel-3.jpg" alt="slide 3" />
{/* 🌐 BACKGROUND (BEHIND EVERYTHING) */}
        <NetworkBackground />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h1 className="display-3 text-white mb-4">
                      Innovative Security Systems
                    </h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      
      <FactsSection/>
      <AboutSection/>
      <ServicesSection/>
      <FeatureSection/>
      <ProjectsSection/>
      <QuoteSection/>
      <TestimonialSection/>



    </>
  );
}