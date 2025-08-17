import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white overflow-hidden">
      {/* Water Wave SVG Background */}
      <div className="absolute inset-0">
        {/* First wave layer - Main gradient wave */}
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" stopOpacity="1" />
              <stop offset="100%" stopColor="#374151" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,180L60,185C120,190,240,200,360,195C480,190,600,175,720,185C840,195,960,215,1080,210C1200,205,1320,175,1380,160L1440,150L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="M0,180L60,185C120,190,240,200,360,195C480,190,600,175,720,185C840,195,960,215,1080,210C1200,205,1320,175,1380,160L1440,150L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
                     M0,210L60,205C120,200,240,185,360,190C480,195,600,210,720,220C840,230,960,235,1080,240C1200,245,1320,235,1380,240L1440,250L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
                     M0,160L60,170C120,180,240,200,360,195C480,190,600,165,720,175C840,185,960,215,1080,200C1200,185,1320,155,1380,140L1440,120L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
                     M0,195L60,180C120,165,240,175,360,190C480,205,600,225,720,215C840,205,960,175,1080,185C1200,195,1320,205,1380,180L1440,170L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;
                     M0,180L60,185C120,190,240,200,360,195C480,190,600,175,720,185C840,195,960,215,1080,210C1200,205,1320,175,1380,160L1440,150L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </path>
        </svg>

        {/* Second wave layer */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-65"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4b5563"
            d="M0,200L90,205C180,210,360,220,540,215C720,210,900,190,1080,200C1260,210,1350,230,1395,240L1440,232.5L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="16s"
              repeatCount="indefinite"
              values="M0,200L90,205C180,210,360,220,540,215C720,210,900,190,1080,200C1260,210,1350,230,1395,240L1440,232.5L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z;
                     M0,230L90,235C180,240,360,250,540,245C720,240,900,220,1080,230C1260,240,1350,260,1395,270L1440,275L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z;
                     M0,185L90,190C180,195,360,205,540,200C720,195,900,175,1080,185C1260,195,1350,215,1395,225L1440,230L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z;
                     M0,220L90,215C180,210,360,200,540,205C720,210,900,230,1080,225C1260,220,1350,200,1395,190L1440,185L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z;
                     M0,200L90,205C180,210,360,220,540,215C720,210,900,190,1080,200C1260,210,1350,230,1395,240L1440,232.5L1440,320L1395,320C1350,320,1260,320,1080,320C900,320,720,320,540,320C360,320,180,320,90,320L0,320Z"
            />
          </path>
        </svg>

        {/* Third wave layer */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-45"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#6b7280"
            d="M0,220L120,225C240,230,480,240,720,235C960,230,1200,215,1320,225L1440,235L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,220L120,225C240,230,480,240,720,235C960,230,1200,215,1320,225L1440,235L1440,320L0,320Z;
                     M0,250L120,255C240,260,480,270,720,265C960,260,1200,245,1320,255L1440,265L1440,320L0,320Z;
                     M0,205L120,210C240,215,480,225,720,220C960,215,1200,200,1320,210L1440,220L1440,320L0,320Z;
                     M0,240L120,235C240,230,480,220,720,225C960,230,1200,245,1320,235L1440,225L1440,320L0,320Z;
                     M0,220L120,225C240,230,480,240,720,235C960,230,1200,215,1320,225L1440,235L1440,320L0,320Z"
            />
          </path>
        </svg>

        {/* Fourth wave layer - Very gentle */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#9ca3af"
            d="M0,240L180,245C360,250,720,260,1080,255C1260,252.5,1320,247.5,1380,245L1440,242.5L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="14s"
              repeatCount="indefinite"
              values="M0,240L180,245C360,250,720,260,1080,255C1260,252.5,1320,247.5,1380,245L1440,242.5L1440,320L0,320Z;
                     M0,270L180,275C360,280,720,290,1080,285C1260,282.5,1320,277.5,1380,275L1440,272.5L1440,320L0,320Z;
                     M0,225L180,230C360,235,720,245,1080,240C1260,237.5,1320,232.5,1380,230L1440,227.5L1440,320L0,320Z;
                     M0,260L180,255C360,250,720,240,1080,245C1260,247.5,1320,252.5,1380,255L1440,257.5L1440,320L0,320Z;
                     M0,240L180,245C360,250,720,260,1080,255C1260,252.5,1320,247.5,1380,245L1440,242.5L1440,320L0,320Z"
            />
          </path>
        </svg>

        {/* Fifth wave layer - Subtle surface ripple */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#d1d5db"
            d="M0,260L160,265C320,270,640,280,960,275C1120,272.5,1280,262.5,1360,257.5L1440,252.5L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="M0,260L160,265C320,270,640,280,960,275C1120,272.5,1280,262.5,1360,257.5L1440,252.5L1440,320L0,320Z;
                     M0,290L160,295C320,300,640,310,960,305C1120,302.5,1280,292.5,1360,287.5L1440,282.5L1440,320L0,320Z;
                     M0,248L160,253C320,258,640,268,960,263C1120,260.5,1280,250.5,1360,245.5L1440,240.5L1440,320L0,320Z;
                     M0,275L160,270C320,265,640,255,960,260C1120,262.5,1280,272.5,1360,277.5L1440,282.5L1440,320L0,320Z;
                     M0,260L160,265C320,270,640,280,960,275C1120,272.5,1280,262.5,1360,257.5L1440,252.5L1440,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Content with relative positioning to appear above waves */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Klarer Norden</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Professionelle Reinigungsdienstleistungen in ganz Norddeutschland.
              Wir sind stolz darauf, außergewöhnliche Qualität und
              Kundenzufriedenheit in jedem Projekt zu liefern.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/klarernorden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300 focus:outline-none"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575284910319&mibextid=wwXIfr&rdid=au5mRUzMbvpqNa0f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CMPyLQg2G%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300 focus:outline-none"
                aria-label="Follow us on Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services and Contact - Side by side on mobile */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Unterhaltsreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Glas und Fensterreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Grund und Endreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Umzugsservice und Entrümpelung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Teppich & Polsterreinigung
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300 focus:outline-none text-sm md:text-base"
                  >
                    Umweltfreundliche Optionen
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/place/KlarerNorden+Reinigungsdienst/@54.5286216,9.5692345,17z/data=!3m1!4b1!4m6!3m5!1s0x47b30d97e33109fd:0xfcb0602fb79c300a!8m2!3d54.5286216!4d9.5692345!16s%2Fg%2F11mdq53hhb?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition duration-300 cursor-pointer focus:outline-none text-sm md:text-base"
                  >
                    Schleswig
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+491726966058"
                    className="hover:text-white transition duration-300 cursor-pointer focus:outline-none text-sm md:text-base"
                  >
                    +491726966058
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:reinigung@klarernorden.info"
                    className="hover:text-white transition duration-300 cursor-pointer focus:outline-none text-sm md:text-base break-all"
                  >
                    reinigung@klarernorden.info
                  </a>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-xs md:text-sm">
                    <div className="mb-1">
                      <span className="font-medium">Mo-Sa:</span> 7:00-20:00 Uhr
                    </div>
                    <div>
                      <span className="font-medium">Sonntag:</span> Geschlossen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center text-gray-400 text-xs">
              <span className="mr-2">Created by</span>
              <a
                href="https://ruben1992.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition duration-300 focus:outline-none"
              >
                <img
                  src="/logo/RMlogo.png"
                  alt="RM Logo"
                  className="h-4 w-auto"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline";
                  }}
                />
                <span
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                  style={{ display: "none" }}
                >
                  RM
                </span>
              </a>
            </div>
            <p className="text-gray-300 text-sm mt-2">
              © 2025 Klarer Norden. Alle Rechte vorbehalten.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/docs/datenschutz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm transition duration-300 focus:outline-none"
            >
              Datenschutz
            </a>
            <a
              href="/docs/impressum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm transition duration-300 focus:outline-none"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
