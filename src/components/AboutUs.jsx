import React from "react";

const AboutUs = () => {
  const stats = [
    { number: "279+", label: "Zufriedene Kunden" },
    { number: "1+", label: "Jahre Erfahrung" },
    { number: "340+", label: "Abgeschlossene Projekte" },
    { number: "24/7", label: "Kundenservice" },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Über Klarer Norden
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Der Name KlarerNorden steht für mehr als nur Sauberkeit. Er
              verbindet zwei zentrale Werte unserer Arbeit: „Klar" – für
              Reinheit, Transparenz und Verlässlichkeit. Norden" – symbolisiert
              unsere Herkunft. KlarerNorden steht für zuverlässige, gründliche
              und professionelle Reinigungsdienstleistungen in ganz
              Schleswig-Holstein. Ob regelmäßige Unterhaltsreinigung,
              streifenfreie Fensterpflege oder umfassende Grundreinigung – wir
              sorgen für Sauberkeit, auf die Sie sich verlassen können.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Unser Team besteht aus Fachkräften mit einem Blick fürs Detail.
              Pünktlichkeit, Diskretion und transparente Kommunikation sind für
              uns selbstverständlich.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Wir arbeiten effizient, umweltbewusst und individuell nach Ihren
              Bedürfnissen – für private Haushalte, Unternehmen oder beim Umzug.
            </p>
          </div>

          {/* Right Content - Video and Stats */}
          <div className="relative">
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

            {/* Stats Overlay */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Warum Sie KlarerNorden wählen sollten?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className=" flex items-center justify-center mx-auto mb-4">
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
              <p className="text-gray-600">
                Wir bieten mehr als nur Sauberkeit – wir perfektionieren jede
                Fläche. Jede Ecke erhält unsere volle Aufmerksamkeit.
              </p>
            </div>
            <div className="p-6">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <img
                  src="/icons/target.gif"
                  alt="Schnell und effizient"
                  className="w20 h-20"
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
              <p className="text-gray-600">
                Unser erfahrenes Reinigungsteam arbeitet zügig und präzise. Wir
                garantieren höchste Effizienz. Ideal für alle, die Wert auf
                einen zeitsparenden Reinigungsservice legen.
              </p>
            </div>
            <div className="p-6">
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
              <p className="text-gray-600">
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
