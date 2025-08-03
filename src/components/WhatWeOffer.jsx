import React from 'react';

const WhatWeOffer = () => {
  const services = [
    {
      icon: "/icons/cleanHouse.gif",
      title: "Unterhaltsreinigung",
      description: "Regelmäßige Reinigung für Büro-, Gewerbe- und Privatflächen – zuverlässig und gründlich!"
    },
    {
      icon: "/icons/glassCleaning.gif",
      title: "Glas und Fensterreinigung",
      description: "Streifenfreie Reinigung von Fenstern, Glasfassaden und Glastrennwänden für klare Sicht!"
    },
    {
      icon: "/icons/cleaningTools.gif",
      title: "Grund und Endreinigung",
      description: "Tiefenreinigung nach Renovierungen, Bauarbeiten oder vor/nach dem Einzug."
    },
    {
      icon: "/icons/trolley.gif",
      title: "Umzugsservice und Entrümpelung",
      description: "Komplette Unterstützung beim Umzug – inkl. Reinigung & Entsorgung!"
    },
    {
      icon: "🏠",
      title: "Wohnungsreinigung",
      description: "Komplette Hausreinigungsdienste einschließlich Tiefenreinigung, regelmäßiger Wartung und Ein-/Auszugsreinigung."
    },
    {
      icon: "🏢",
      title: "Gewerbliche Reinigung",
      description: "Professionelle Büro- und Gewerbeflächenreinigung mit flexibler Terminplanung für Ihre Geschäftsanforderungen."
    },
    {
      icon: "🛋️",
      title: "Teppich & Polsterreinigung",
      description: "Tiefenreinigung für Teppiche, Läufer und Polstermöbel mit umweltfreundlichen Produkten und fortschrittlichen Techniken."
    },
    {
      icon: "🌿",
      title: "Umweltfreundliche Optionen",
      description: "Grüne Reinigungslösungen, die sicher für Ihre Familie, Haustiere und die Umwelt sind."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Was wir anbieten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir bieten umfassende Reinigungsdienstleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind und Ihre Erwartungen übertreffen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-start space-x-3 mb-4">
                {service.icon.startsWith("/") ? (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mt-1"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "inline";
                    }}
                  />
                ) : null}
                <span
                  className="text-4xl"
                  style={{
                    display: service.icon.startsWith("/") ? "none" : "inline",
                  }}
                >
                  {service.icon.startsWith("/") ? "🏢" : service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Angebot anfordern
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;