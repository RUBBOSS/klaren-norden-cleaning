import React, { useState } from 'react';

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const works = [
    {
      id: 1,
      category: 'residential',
      title: 'Modern Apartment Deep Clean',
      description: 'Complete deep cleaning of a 3-bedroom apartment including kitchen, bathrooms, and living areas.',
      image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Apartment+Cleaning',
      beforeAfter: true
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Office Building Maintenance',
      description: 'Regular cleaning service for a 5-story office building with 50+ employees.',
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Office+Cleaning',
      beforeAfter: false
    },
    {
      id: 3,
      category: 'residential',
      title: 'Post-Construction Cleanup',
      description: 'Thorough cleanup after home renovation including dust removal and detail cleaning.',
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Construction+Cleanup',
      beforeAfter: true
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Restaurant Kitchen Deep Clean',
      description: 'Professional kitchen cleaning meeting health department standards.',
      image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Restaurant+Kitchen',
      beforeAfter: false
    },
    {
      id: 5,
      category: 'residential',
      title: 'Move-Out Cleaning Service',
      description: 'Complete move-out cleaning ensuring full security deposit return.',
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Move+Out+Clean',
      beforeAfter: true
    },
    {
      id: 6,
      category: 'commercial',
      title: 'Medical Facility Sanitization',
      description: 'Specialized cleaning for medical office with hospital-grade disinfection.',
      image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Medical+Cleaning',
      beforeAfter: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent cleaning projects and see the quality difference we deliver.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 hidden items-center justify-center text-white font-semibold text-lg"
                  style={{ display: 'none' }}
                >
                  {work.title}
                </div>
                {work.beforeAfter && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before/After
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {work.category.charAt(0).toUpperCase() + work.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;