import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '3+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const features = [
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: 'Complete insurance coverage for your peace of mind'
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'Safe, green cleaning products that protect your family'
    },
    {
      icon: '⭐',
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all our services'
    },
    {
      icon: '👥',
      title: 'Professional Team',
      description: 'Trained and experienced cleaning professionals'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Klarer Norden</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a professional cleaning company serving Northern Germany with pride and dedication. 
              Our mission is to provide exceptional cleaning services that exceed our customers' expectations 
              while maintaining the highest standards of quality and reliability.
            </p>
            <p className="text-gray-600 mb-8">
              Founded with a vision to transform spaces and lives, we combine traditional cleaning methods 
              with modern techniques and eco-friendly products. Our team of experienced professionals is 
              committed to delivering spotless results every time.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Learn More About Us
            </button>
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
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Klarer Norden?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Attention to Detail</h4>
              <p className="text-gray-600">
                We don't just clean; we perfect. Every corner, every surface receives our meticulous attention.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Fast & Efficient</h4>
              <p className="text-gray-600">
                Our trained team works efficiently without compromising on quality, saving you time.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Premium Service</h4>
              <p className="text-gray-600">
                Experience luxury cleaning with premium products and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;