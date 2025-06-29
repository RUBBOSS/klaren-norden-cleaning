import React from 'react';

const WhatWeOffer = () => {
  const services = [
    {
      icon: "🏠",
      title: "Residential Cleaning",
      description: "Complete home cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning."
    },
    {
      icon: "🏢",
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning with flexible scheduling to meet your business needs."
    },
    {
      icon: "🪟",
      title: "Window Cleaning",
      description: "Crystal clear window cleaning for both interior and exterior windows, leaving streak-free results."
    },
    {
      icon: "🛋️",
      title: "Carpet & Upholstery",
      description: "Deep cleaning for carpets, rugs, and upholstery using eco-friendly products and advanced techniques."
    },
    {
      icon: "🧽",
      title: "Deep Cleaning",
      description: "Thorough deep cleaning service that reaches every corner, perfect for seasonal cleaning or special occasions."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Options",
      description: "Green cleaning solutions that are safe for your family, pets, and the environment."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive cleaning services tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;