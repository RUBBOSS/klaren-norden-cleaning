import React, { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const works = [
    {
      id: 1,
      category: "residential",
      title: "Modern Apartment Deep Clean",
      description:
        "Complete deep cleaning of a 3-bedroom apartment including kitchen, bathrooms, and living areas.",
      beforeAfter: true,
      beforeImage: "/pictures/pic1.jpg",
      afterImage: "/pictures/pic11.jpg",
    },
    {
      id: 2,
      category: "commercial",
      title: "Office Building Maintenance",
      description:
        "Regular cleaning service for a 5-story office building with 50+ employees.",
      beforeAfter: true,
      beforeImage: "/pictures/pic2.jpg",
      afterImage: "/pictures/pic22.jpg",
    },
    {
      id: 3,
      category: "residential",
      title: "Post-Construction Cleanup",
      description:
        "Thorough cleanup after home renovation including dust removal and detail cleaning.",
      beforeAfter: true,
      beforeImage: "/pictures/pic3.jpg",
      afterImage: "/pictures/pic33.jpg",
    },
    {
      id: 4,
      category: "commercial",
      title: "Restaurant Kitchen Deep Clean",
      description:
        "Professional kitchen cleaning meeting health department standards.",
      beforeAfter: true,
      beforeImage: "/pictures/pic4.jpg",
      afterImage: "/pictures/pic44.jpg",
    },
    {
      id: 5,
      category: "residential",
      title: "Move-Out Cleaning Service",
      description:
        "Complete move-out cleaning ensuring full security deposit return.",
      beforeAfter: true,
      beforeImage: "/pictures/pic5.jpg",
      afterImage: "/pictures/pic55.jpg",
    },
    {
      id: 6,
      category: "commercial",
      title: "Medical Facility Sanitization",
      description:
        "Specialized cleaning for medical office with hospital-grade disinfection.",
      beforeAfter: true,
      beforeImage: "/pictures/pic6.jpg",
      afterImage: "/pictures/pic66.jpg",
    },
    {
      id: 7,
      category: "residential",
      title: "Deep Cleaning Service",
      description:
        "Comprehensive deep cleaning with attention to every detail.",
      beforeAfter: true,
      beforeImage: "/pictures/pic7.jpg",
      afterImage: "/pictures/pic77.jpg",
    },
  ];

  const categories = [
    { key: "residential", label: "Residential" },
    { key: "all", label: "All Projects" },
    { key: "commercial", label: "Commercial" },
  ];

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section id="works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Unsere Arbeiten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Werfen Sie einen Blick auf einige unserer jüngsten
            Reinigungsprojekte und überzeugen Sie sich von dem
            Qualitätsunterschied, den wir bieten.{" "}
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                {work.beforeAfter ? (
                  <BeforeAfterSlider
                    beforeImage={work.beforeImage}
                    afterImage={work.afterImage}
                    className="rounded-t-lg"
                  />
                ) : (
                  <>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 hidden items-center justify-center text-white font-semibold text-lg"
                      style={{ display: "none" }}
                    >
                      {work.title}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
