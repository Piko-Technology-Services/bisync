"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

/* ─── DATA ─────────────────────────────────────────────── */

const categories = [
  {
    id: "networking",
    icon: "fa-network-wired",
    label: "Networking",
    title: "Networking Products",
    subtitle: "Enterprise-grade routers, switches, access points & wireless bridges",
    brands: [
      {
        name: "Grandstream",
        logo: null, // replace with /images/brands/grandstream.png
        description:
          "Industry-leading UCM IP PBX systems, Wi-Fi access points, gigabit routers and managed switches with embedded cloud management and 3-year warranty.",
        products: [
          { name: "GWN7660 Indoor Wi-Fi 6 Access Point", desc: "Dual-band 1.77 Gbps, 250-device capacity, embedded controller." },
          { name: "GWN7664 Outdoor Wi-Fi 6 Access Point", desc: "IP67 weatherproof, 750 m range, PoE powered." },
          { name: "GWN7803P Managed PoE Switch", desc: "24-port Gigabit, 8 × SFP uplinks, Layer 2+ managed." },
          { name: "GWN7052 Gigabit Router", desc: "Dual-WAN, VPN gateway, SD-WAN ready for multi-site deployments." },
        ],
      },
      {
        name: "MikroTik",
        logo: null,
        description:
          "Highly capable RouterOS-powered devices trusted by ISPs and enterprise networks for their flexibility, cost-effectiveness, and robust routing feature set.",
        products: [
          { name: "hAP ac lite (RB952Ui-5ac2nD)", desc: "5-port Wi-Fi 5 desktop router, dual-band, RouterOS L4." },
          { name: "hEX 5-Port Gigabit Router", desc: "Compact desktop router, hardware encryption, L4 license." },
          { name: "hEX PoE Router", desc: "5 × Gigabit (4 × PoE), 1 × SFP, ideal for small offices." },
          { name: "PowerBox Pro Outdoor Router", desc: "IP54 outdoor, 4 × PoE out, 1 × SFP, surge protection." },
        ],
      },
      {
        name: "Cudy",
        logo: null,
        description:
          "Affordable yet powerful Wi-Fi 6 routers, mesh systems, LTE/5G CPEs and PoE switches — ideal for SME environments.",
        products: [
          { name: "WR3000 Wi-Fi 6 Router", desc: "AX3000 tri-band, OFDMA, MU-MIMO, 4 × Gigabit LAN." },
          { name: "M1800 Mesh System (2-Pack)", desc: "AX1800 whole-home mesh, seamless roaming, app managed." },
          { name: "LT700 4G LTE Router", desc: "Cat 7, dual SIM, 4 × Gigabit LAN, failover support." },
          { name: "POE400 90W Switch", desc: "4-port 90 W PoE+, plug-and-play for IP cameras & APs." },
        ],
      },
      {
        name: "Netgear",
        logo: null,
        description:
          "Nighthawk Wi-Fi 7 routers and ProSAFE switches delivering multi-gigabit speeds for bandwidth-intensive business and home environments.",
        products: [
          { name: "Nighthawk RS700 Wi-Fi 7 Router", desc: "9.3 Gbps tri-band, 2.5G WAN port, StreamBoost QoS." },
          { name: "Nighthawk RBE870 Wi-Fi 7 Mesh", desc: "Orbi tri-band, 18 Gbps aggregate, 2500 sq-ft coverage." },
          { name: "MS510TXM 10G Smart Switch", desc: "8 × Multi-Gig, 2 × 10G SFP+, VLAN, QoS, managed." },
          { name: "GS308EPP PoE+ Switch", desc: "8-port Gigabit, 123 W PoE budget, web managed." },
        ],
      },
      {
        name: "Teltonika",
        logo: null,
        description:
          "Industrial-grade 4G/5G routers and IoT gateways built for mission-critical connectivity in harsh environments.",
        products: [
          { name: "RUT240 Industrial 4G Router", desc: "Cat 4 LTE, dual SIM failover, DIN rail option." },
          { name: "RUT200 Compact 4G Router", desc: "Cat 4, 2 × Ethernet, compact form factor for M2M." },
          { name: "RUTX11 Multi-WAN Router", desc: "4G + Wi-Fi 5 + Ethernet WAN, OpenVPN, dual SIM." },
          { name: "TRB245 Industrial Gateway", desc: "Cat 4 LTE gateway for RS232/RS485 serial device integration." },
        ],
      },
    ],
  },
  {
    id: "security",
    icon: "fa-video",
    label: "Security Cameras",
    title: "CCTV & Security Cameras",
    subtitle: "IP cameras, DVRs, NVRs and complete surveillance systems",
    brands: [
      {
        name: "Hikvision",
        logo: null,
        description:
          "World's leading video surveillance brand — offering 4K IP cameras, AI-powered analytics, ColorVu low-light technology and AcuSense motion detection.",
        products: [
          { name: "DS-2CD2347G2-LU ColorVu", desc: "4 MP full-color 24/7, built-in mic, H.265+, IP67." },
          { name: "DS-2CD2T47G2-L AcuSense", desc: "4 MP bullet, false-alarm filtering, 60 m IR range." },
          { name: "iDS-7208HUHI-M2/S DVR", desc: "8-ch 5MP Turbo HD AcuSense DVR, facial detection." },
          { name: "DS-7616NXI-I2/16P NVR", desc: "16-ch 4K NVR with 16-port PoE, HDMI/VGA output." },
        ],
      },
      {
        name: "Dahua",
        logo: null,
        description:
          "Dahua Technology delivers full-range surveillance with WizSense AI cameras, smart NVRs and deep-learning perimeter protection.",
        products: [
          { name: "IPC-HDW2831T-AS WizSense", desc: "8 MP eyeball IP cam, SMD Plus, 30 m IR, built-in mic." },
          { name: "IPC-HFW2849S-S-IL Smart Dual", desc: "8 MP dual-light, full-color + IR, H.265+, IP67." },
          { name: "XVR5108HS-4KL-I3 DVR", desc: "8-ch 4K WizSense DVR, SMD Plus, face detection." },
          { name: "NVR4216-EI WizSense NVR", desc: "16-ch 4K NVR, AI features, 2 HDD bays, PoE version avail." },
        ],
      },
      {
        name: "Uniview (UNV)",
        logo: null,
        description:
          "Uniview's LightHunter and EasyStar series offer exceptional low-light imaging and simple plug-and-play NVR/camera pairings.",
        products: [
          { name: "IPC3614SB-ADF28KM LightHunter", desc: "4 MP 24/7 color, motorized varifocal, IR + warm light." },
          { name: "IPC3615SB-ADF28KM Bullet", desc: "5 MP full-color, 2.8 mm, built-in mic, IP67/IK10." },
          { name: "NVR301-16P-P16 PoE NVR", desc: "16-ch 4K, 16 PoE ports, Smart Motion Detect+." },
          { name: "KIT/NVR301+IPC3614", desc: "8-cam + NVR starter kit, pre-paired, app ready." },
        ],
      },
    ],
  },
  {
    id: "hardware",
    icon: "fa-microchip",
    label: "Hardware",
    title: "IT Hardware & Components",
    subtitle: "Servers, UPS systems, structured cabling and peripherals",
    brands: [
      {
        name: "APC by Schneider Electric",
        logo: null,
        description:
          "Industry-standard UPS solutions and power conditioning products that protect critical IT equipment from power disturbances.",
        products: [
          { name: "Smart-UPS 1500VA LCD RM", desc: "1500 VA / 1000 W rack UPS, pure sine wave, USB/serial mgmt." },
          { name: "Back-UPS Pro 1200VA", desc: "1200 VA tower, AVR, 10-outlet, surge protection." },
          { name: "Smart-UPS SRT 3000VA", desc: "Online double-conversion, 3000 VA, hot-swap batteries." },
          { name: "NetShelter SX 42U Rack", desc: "600 mm wide, 1070 mm deep, 42U server rack enclosure." },
        ],
      },
      {
        name: "Structured Cabling",
        logo: null,
        description:
          "End-to-end Cat6/Cat6A cabling infrastructure including patch panels, keystone jacks, cable management trays and face plates.",
        products: [
          { name: "Cat6 UTP Cable (305 m Box)", desc: "CMR-rated, 550 MHz, 23 AWG solid copper, 4-pair." },
          { name: "Cat6A STP Cable (305 m Box)", desc: "10G-ready, 600 MHz, individually shielded pairs." },
          { name: "24-Port Cat6 Patch Panel", desc: "1U 568A/B compatible, 110 punch-down, cable label ID." },
          { name: "LC–LC Fiber Patch Cord (SM)", desc: "OS2 single-mode, 9/125 μm, 3 m, low-loss ceramic ferrule." },
        ],
      },
      {
        name: "Dell / HP Servers",
        logo: null,
        description:
          "Rack and tower servers for SME and enterprise use — reliable compute for file sharing, virtualisation and database workloads.",
        products: [
          { name: "Dell PowerEdge T150 Tower", desc: "Intel Xeon E-2300, up to 128 GB ECC DDR4, 4 × LFF." },
          { name: "HP ProLiant DL360 Gen10", desc: "1U rack, dual Xeon Scalable, 24 × DIMM, 2.5\" SFF." },
          { name: "Dell PowerEdge R350 1U Rack", desc: "Xeon E-2300, PERC RAID, iDRAC9 remote management." },
          { name: "HP ProLiant ML110 Gen10", desc: "Tower server, Xeon Bronze, 16 GB DDR4, B140i RAID." },
        ],
      },
      {
        name: "Panduit / Legrand",
        logo: null,
        description:
          "Professional cable management, PDUs, rack accessories and fibre management systems for organised and scalable data centres.",
        products: [
          { name: "Horizontal Cable Manager 1U", desc: "2-sided with cover, holds up to 100 cables, 19\" rack." },
          { name: "Vertical 0U Cable Manager", desc: "Full-height side panels for vertical cable routing in rack." },
          { name: "8-Outlet Rack PDU", desc: "1.5 U, C13 outlets, 16 A, IEC C20 input, surge protected." },
          { name: "Fiber Enclosure 12-Port LC", desc: "1U adapter panel, OS2/OM3 compatible, swing-out design." },
        ],
      },
    ],
  },
  {
    id: "starlink",
    icon: "fa-satellite",
    label: "Starlink",
    title: "Starlink Satellite Internet",
    subtitle: "SpaceX low-earth-orbit satellite broadband — anywhere connectivity",
    brands: [
      {
        name: "Starlink",
        logo: null,
        description:
          "SpaceX's Starlink delivers high-speed, low-latency satellite internet to underserved and rural areas across Zambia and Africa — with speeds typically between 100–300 Mbps and latency as low as 20 ms.",
        products: [
          { name: "Starlink Standard Kit", desc: "Residential dish, Wi-Fi router, mounting base. Ideal for homes and small offices." },
          { name: "Starlink Business Kit", desc: "High-priority data, faster speeds, priority support — for SMEs needing reliable uptime." },
          { name: "Starlink Flat High Performance", desc: "Flat-panel design for permanent installation on rooftops and commercial buildings." },
          { name: "Starlink Roam (Portable)", desc: "Move your dish anywhere — ideal for field sites, farms and mobile operations." },
        ],
      },
    ],
  },
  {
    id: "fiber",
    icon: "fa-project-diagram",
    label: "Fiber & Internet",
    title: "Fiber Optic & Internet Solutions",
    subtitle: "Fiber installation, ISP connectivity and last-mile broadband solutions",
    brands: [
      {
        name: "Fiber Optic Infrastructure",
        logo: null,
        description:
          "We supply, install and terminate single-mode and multi-mode fiber optic cable for backbone, campus and last-mile networks — including FTTH/FTTB deployments.",
        products: [
          { name: "Single-Mode OS2 Fiber Cable", desc: "9/125 μm, LSZH jacket, armoured option, outdoor & indoor." },
          { name: "Multi-Mode OM4 Fiber Cable", desc: "50/125 μm, 10G/40G/100G capable, low bend-radius." },
          { name: "Fiber Splice Closure", desc: "Dome-type, 48-splice capacity, IP68, aerial or underground." },
          { name: "OTDR Testing & Certification", desc: "Full end-to-end fiber testing, documentation and loss report." },
        ],
      },
      {
        name: "Internet Connectivity Services",
        logo: null,
        description:
          "We partner with leading Zambian ISPs to provide dedicated fibre, leased-line, LTE and hybrid WAN internet connections for businesses of all sizes.",
        products: [
          { name: "Dedicated Fiber Leased Line", desc: "10 Mbps – 1 Gbps symmetrical, SLA-backed, business-grade." },
          { name: "Wireless Last-Mile Link", desc: "Licensed PtP/PtMP wireless for sites where fiber is unavailable." },
          { name: "LTE Backup / Bonded Internet", desc: "Multi-WAN failover using 4G/5G SIM — zero downtime solution." },
          { name: "Network Design & ISP Liaison", desc: "We handle site survey, ISP coordination, CPE install & config." },
        ],
      },
      {
        name: "FTTH / FTTB Deployment",
        logo: null,
        description:
          "End-to-end Fiber-to-the-Home and Fiber-to-the-Building rollout services including trenching, duct installation, OLT/ONT equipment supply and activation.",
        products: [
          { name: "OLT (Optical Line Terminal)", desc: "GPON OLT for multi-subscriber distribution, rack-mount." },
          { name: "ONT / ONU Home Unit", desc: "GPON single-port to 4-port ONT, VoIP-capable, TR-069." },
          { name: "Fiber Distribution Cabinet", desc: "Outdoor pole/wall mount, 48 to 144 splice capacity, lockable." },
          { name: "Micro-Duct & Blowing Equipment", desc: "7 mm microduct system for urban FTTH rollouts, includes jointing." },
        ],
      },
    ],
  },
];

/* ─── HELPERS ──────────────────────────────────────────── */

function CategoryPill({ cat, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bs-pill ${active ? "bs-pill-active" : ""}`}
    >
      <i className={`fa ${cat.icon} me-2`}></i>
      {cat.label}
    </button>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bs-product-card">
      <div className="bs-product-img">
        <i className="fa fa-box-open"></i>
      </div>
      <div className="bs-product-body">
        <h6 className="bs-product-name">{product.name}</h6>
        <p className="bs-product-desc">{product.desc}</p>
      </div>
    </div>
  );
}

function BrandBlock({ brand }) {
  return (
    <div className="bs-brand-block">
      {/* Brand header */}
      <div className="bs-brand-header">
        <div className="bs-brand-logo-box">
          {brand.logo ? (
            <img src={brand.logo} alt={brand.name} />
          ) : (
            <div className="bs-brand-logo-placeholder">
              <i className="fa fa-building"></i>
            </div>
          )}
        </div>
        <div>
          <h4 className="bs-brand-name">{brand.name}</h4>
          <p className="bs-brand-desc">{brand.description}</p>
        </div>
      </div>

      {/* Products grid */}
      <div className="bs-products-grid">
        {brand.products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      {/* CTA */}
      <div className="bs-brand-cta">
        <a
          href="https://bisynconlinestore.odoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bs-marketplace-btn"
        >
          <i className="fa fa-store me-2"></i>
          View {brand.name} Products on Marketplace
          <i className="fa fa-arrow-right ms-2 bs-arrow"></i>
        </a>
      </div>
    </div>
  );
}

/* ─── PAGE ─────────────────────────────────────────────── */

export default function ProductsPage() {
  const [activeId, setActiveId] = useState("networking");
  const active = categories.find((c) => c.id === activeId);

  return (
    <>
      <Navbar />

      {/* PAGE HERO */}
      <div className="bs-products-hero">
        <div className="container">
          <span className="bs-hero-eyebrow">What We Supply & Install</span>
          <h1 className="bs-hero-title">Our Product Range</h1>
          <p className="bs-hero-sub">
            From networking hardware to satellite internet — we source, supply and install
            enterprise-grade technology across Zambia.
          </p>
          <a
            href="https://bisynconlinestore.odoo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bs-hero-store-btn"
          >
            <i className="fa fa-store me-2"></i>
            Visit Our Online Marketplace
          </a>
        </div>
      </div>

      {/* STICKY CATEGORY PILLS */}
      <div className="bs-category-bar">
        <div className="container">
          <div className="bs-pills-row">
            {categories.map((cat) => (
              <CategoryPill
                key={cat.id}
                cat={cat}
                active={activeId === cat.id}
                onClick={() => setActiveId(cat.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container py-5">

        {/* Category heading */}
        <div className="bs-cat-heading">
          <div className="bs-cat-icon-wrap">
            <i className={`fa ${active.icon}`}></i>
          </div>
          <div>
            <h2 className="bs-cat-title">{active.title}</h2>
            <p className="bs-cat-subtitle">{active.subtitle}</p>
          </div>
        </div>

        {/* Brand blocks */}
        <div className="bs-brands-list">
          {active.brands.map((brand, i) => (
            <BrandBlock key={i} brand={brand} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="bs-bottom-banner">
          <div className="bs-bottom-banner-inner">
            <i className="fa fa-shopping-cart bs-banner-icon"></i>
            <div>
              <h4>Can't find what you're looking for?</h4>
              <p>Browse our full catalogue on the BISYNC online store or contact us for a custom quote.</p>
            </div>
            <div className="bs-banner-actions">
              <a
                href="https://bisynconlinestore.odoo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bs-marketplace-btn"
              >
                <i className="fa fa-store me-2"></i>
                Open Marketplace
              </a>
              <Link href="/contact" className="bs-quote-btn">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        :root {
          --bsp-orange: #f7941d;
          --bsp-orange-deep: #e07b00;
          --bsp-black: #111111;
          --bsp-dark: #1a1a2e;
          --bsp-surface: #f8f9fb;
          --bsp-border: #e8eaed;
          --bsp-text: #2d3748;
          --bsp-muted: #718096;
        }

        /* ── HERO ── */
        .bs-products-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
          padding: 80px 0 64px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bs-products-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(247,148,29,0.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .bs-hero-eyebrow {
          display: inline-block;
          background: rgba(247,148,29,0.15);
          color: var(--bsp-orange);
          border: 1px solid rgba(247,148,29,0.3);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 18px;
        }
        .bs-hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .bs-hero-sub {
          color: rgba(255,255,255,0.7);
          font-size: 1.05rem;
          max-width: 540px;
          margin: 0 auto 28px;
          line-height: 1.7;
        }
        .bs-hero-store-btn {
          display: inline-flex;
          align-items: center;
          background: var(--bsp-orange);
          color: #fff;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }
        .bs-hero-store-btn:hover {
          background: var(--bsp-orange-deep);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(247,148,29,0.35);
          color: #fff;
        }

        /* ── CATEGORY BAR ── */
        .bs-category-bar {
          background: #fff;
          border-bottom: 2px solid var(--bsp-border);
          position: sticky;
          top: 70px; /* below navbar */
          z-index: 100;
        }
        .bs-pills-row {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding: 12px 0;
          scrollbar-width: none;
        }
        .bs-pills-row::-webkit-scrollbar { display: none; }
        .bs-pill {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          padding: 8px 20px;
          border-radius: 6px;
          border: 2px solid transparent;
          background: var(--bsp-surface);
          color: var(--bsp-text);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .bs-pill:hover {
          border-color: var(--bsp-orange);
          color: var(--bsp-orange);
          background: rgba(247,148,29,0.05);
        }
        .bs-pill-active {
          background: var(--bsp-orange) !important;
          color: #fff !important;
          border-color: var(--bsp-orange) !important;
        }

        /* ── CATEGORY HEADING ── */
        .bs-cat-heading {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 40px;
        }
        .bs-cat-icon-wrap {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          background: linear-gradient(135deg, var(--bsp-orange), var(--bsp-orange-deep));
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.4rem;
          box-shadow: 0 6px 18px rgba(247,148,29,0.3);
        }
        .bs-cat-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--bsp-black);
          margin: 0 0 4px;
        }
        .bs-cat-subtitle {
          color: var(--bsp-muted);
          margin: 0;
          font-size: 0.95rem;
        }

        /* ── BRAND BLOCK ── */
        .bs-brands-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
          margin-bottom: 48px;
        }
        .bs-brand-block {
          background: #fff;
          border: 1.5px solid var(--bsp-border);
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .bs-brand-block:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border-color: rgba(247,148,29,0.3);
        }
        .bs-brand-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 28px 28px 20px;
          border-bottom: 1.5px solid var(--bsp-border);
          background: var(--bsp-surface);
        }
        .bs-brand-logo-box {
          width: 72px;
          height: 72px;
          flex-shrink: 0;
          border-radius: 12px;
          border: 1.5px solid var(--bsp-border);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .bs-brand-logo-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
        }
        .bs-brand-logo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          color: var(--bsp-orange);
          background: rgba(247,148,29,0.07);
        }
        .bs-brand-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--bsp-black);
          margin: 0 0 6px;
        }
        .bs-brand-desc {
          font-size: 0.88rem;
          color: var(--bsp-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 640px;
        }

        /* ── PRODUCTS GRID ── */
        .bs-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1px;
          background: var(--bsp-border);
        }
        .bs-product-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: background 0.2s ease;
        }
        .bs-product-card:hover {
          background: #fffbf5;
        }
        .bs-product-img {
          height: 130px;
          background: linear-gradient(135deg, #f8f9fb 0%, #f0f1f4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          color: #c8ccda;
          transition: color 0.2s ease;
          border-bottom: 1px solid var(--bsp-border);
        }
        .bs-product-card:hover .bs-product-img {
          color: var(--bsp-orange);
        }
        .bs-product-body {
          padding: 14px 16px 16px;
          flex: 1;
        }
        .bs-product-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--bsp-black);
          margin: 0 0 5px;
          line-height: 1.4;
        }
        .bs-product-desc {
          font-size: 0.8rem;
          color: var(--bsp-muted);
          margin: 0;
          line-height: 1.55;
        }

        /* ── BRAND CTA ── */
        .bs-brand-cta {
          padding: 16px 28px;
          background: var(--bsp-surface);
          border-top: 1.5px solid var(--bsp-border);
          display: flex;
          justify-content: flex-end;
        }
        .bs-marketplace-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bsp-orange);
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .bs-marketplace-btn::before {
          content: "";
          position: absolute;
          left: -5%;
          bottom: 0;
          width: 110%;
          height: 0%;
          background: var(--bsp-black);
          border-radius: 45% 45% 0 0 / 12% 12% 0 0;
          transition: height 0.45s cubic-bezier(0.45, 0, 0.2, 1);
          z-index: 0;
        }
        .bs-marketplace-btn:hover::before {
          height: 110%;
        }
        .bs-marketplace-btn > * {
          position: relative;
          z-index: 1;
        }
        .bs-marketplace-btn:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(247,148,29,0.3);
        }
        .bs-arrow {
          transition: transform 0.2s ease;
        }
        .bs-marketplace-btn:hover .bs-arrow {
          transform: translateX(4px);
        }

        /* ── BOTTOM BANNER ── */
        .bs-bottom-banner {
          background: linear-gradient(135deg, var(--bsp-dark) 0%, #0f3460 100%);
          border-radius: 16px;
          padding: 2px;
        }
        .bs-bottom-banner-inner {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 14px;
          padding: 32px 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .bs-banner-icon {
          font-size: 2.2rem;
          color: var(--bsp-orange);
          flex-shrink: 0;
        }
        .bs-bottom-banner-inner h4 {
          color: #fff;
          font-weight: 800;
          margin: 0 0 4px;
          font-size: 1.1rem;
        }
        .bs-bottom-banner-inner p {
          color: rgba(255,255,255,0.6);
          margin: 0;
          font-size: 0.875rem;
        }
        .bs-banner-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-left: auto;
        }
        .bs-quote-btn {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 0.875rem;
          padding: 10px 22px;
          border-radius: 8px;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.3);
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .bs-quote-btn:hover {
          border-color: var(--bsp-orange);
          background: rgba(247,148,29,0.1);
          color: var(--bsp-orange);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .bs-products-hero { padding: 56px 0 44px; }
          .bs-brand-header { flex-direction: column; }
          .bs-bottom-banner-inner { flex-direction: column; text-align: center; }
          .bs-banner-actions { margin-left: 0; justify-content: center; }
          .bs-brand-cta { justify-content: center; }
          .bs-cat-heading { flex-direction: column; text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bs-marketplace-btn::before,
          .bs-hero-store-btn,
          .bs-pill,
          .bs-brand-block {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}