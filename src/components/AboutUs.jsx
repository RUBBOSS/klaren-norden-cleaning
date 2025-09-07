import React from "react";

const AboutUs = () => {
  const videoStats = [
    { number: "279+", label: "Zufriedene Kunden" },
    { number: "1+", label: "Jahre Erfahrung" },
  ];

  const textStats = [
    { number: "340+", label: "Abgeschlossene Projekte" },
    { number: "24/7", label: "Kundenservice" },
  ];

  // Combined stats for mobile display
  const allStats = [
    { number: "340+", label: "Abgeschlossene Projekte" },
    { number: "24/7", label: "Kundenservice" },
    { number: "279+", label: "Zufriedene Kunden" },
    { number: "1+", label: "Jahre Erfahrung" },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Über Klarer Norden
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-tight font-semibold">
                Der Name KlarerNorden steht für mehr als nur Sauberkeit. Er
                verbindet zwei zentrale Werte unserer Arbeit: „Klar" – für
                Reinheit, Transparenz und Verlässlichkeit. „Norden" –
                symbolisiert unsere Herkunft.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-tight font-semibold">
                KlarerNorden steht für zuverlässige, gründliche und
                professionelle Reinigungsdienstleistungen in ganz
                Schleswig-Holstein. Ob regelmäßige Unterhaltsreinigung,
                streifenfreie Fensterpflege oder umfassende Grundreinigung, wir
                sorgen für Sauberkeit, auf die Sie sich verlassen können.
              </p>
              <p className="text-base text-gray-600 mb-2 leading-tight font-semibold">
                Unser Team besteht aus Fachkräften mit einem Blick fürs Detail.
                Pünktlichkeit, Diskretion und transparente Kommunikation sind
                für uns selbstverständlich.
              </p>
              <p className="text-base text-gray-600 mb-3 leading-tight font-semibold">
                Wir arbeiten effizient, umweltbewusst und individuell nach Ihren
                Bedürfnissen für private Haushalte, Unternehmen oder beim Umzug.
              </p>
            </div>

            {/* Stats at bottom of left section - Hidden on mobile */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
              {textStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center h-24 flex flex-col justify-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-base font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Video and Stats */}
          <div className="flex flex-col">
            <div className="flex-grow">
              {/* Main Video */}
              <div className="rounded-lg overflow-hidden h-96 mb-6">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                >
                  <source
                    src="https://media.istockphoto.com/id/1422277971/video/happy-latin-american-woman-leading-a-group-of-professional-cleaners-holding-a-basket-of.mp4?s=mp4-640x640-is&k=20&c=hZZqAp_-84aQzQcxvfNAK12ztcmhOn05vfz9S4_IJyY="
                    type="video/mp4"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                    Professional Cleaning Team
                  </div>
                </video>
              </div>
            </div>

            {/* Stats Overlay - Hidden on mobile */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
              {videoStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center h-24 flex flex-col justify-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-base font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stats Section - Visible only on mobile */}
        <div className="lg:hidden mt-8">
          <div className="grid grid-cols-2 gap-4">
            {allStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center h-24 flex flex-col justify-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-28 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-8">
            Warum Sie KlarerNorden wählen sollten?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/icons/person.gif"
                  alt="Professional Team"
                  className="w-20 h-20"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline";
                  }}
                />
                <span className="text-2xl" style={{ display: "none" }}>
                  🎯
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Gründliche & professionelle Reinigung
              </h4>
              <p className="text-base text-gray-600">
                Wir bieten mehr als nur Sauberkeit – wir perfektionieren jede
                Fläche. Jede Ecke erhält unsere volle Aufmerksamkeit.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/icons/target.gif"
                  alt="Schnell und effizient"
                  className="w-20 h-20"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline";
                  }}
                />
                <span className="text-2xl" style={{ display: "none" }}>
                  ⚡
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Schnell, effizient & zuverlässig
              </h4>
              <p className="text-base text-gray-600">
                Unser erfahrenes Reinigungsteam arbeitet zügig und präzise. Wir
                garantieren höchste Effizienz. Ideal für alle, die Wert auf
                einen zeitsparenden Reinigungsservice legen.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/icons/diamond.gif"
                  alt="Premium Service"
                  className="w-20 h-20"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "inline";
                  }}
                />
                <span className="text-2xl" style={{ display: "none" }}>
                  💎
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Hochwertiger Premium-Reinigungsservice
              </h4>
              <p className="text-base text-gray-600">
                Erleben Sie Reinigung auf höchstem Niveau - mit ausgewählten
                Reinigungsprodukten, persönlichem Service und einem Ergebnis,
                das überzeugt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
