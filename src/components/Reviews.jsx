import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Hamburg",
      rating: 5,
      text: "Absolutely fantastic service! The team was professional, thorough, and left my home sparkling clean. I couldn't be happier with the results.",
      service: "Deep Cleaning"
    },
    {
      id: 2,
      name: "Michael Schmidt",
      location: "Bremen",
      rating: 5,
      text: "Klarer Norden has been cleaning our office for 6 months now. Always reliable, efficient, and the quality is consistently excellent.",
      service: "Commercial Cleaning"
    },
    {
      id: 3,
      name: "Emma Müller",
      location: "Kiel",
      rating: 5,
      text: "The post-construction cleanup was amazing. They handled all the dust and debris perfectly. Highly recommend their services!",
      service: "Post-Construction"
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Lübeck",
      rating: 5,
      text: "Professional window cleaning service. My windows have never been cleaner! Great attention to detail and very reasonable prices.",
      service: "Window Cleaning"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Rostock",
      rating: 5,
      text: "The team was punctual, friendly, and did an incredible job with our move-out cleaning. Got our full deposit back thanks to them!",
      service: "Move-out Cleaning"
    }
  ];

  // Auto-slide reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
        </div>

        {/* Featured Review Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={prevReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="text-center flex-1">
                <div className="text-2xl mb-4">{renderStars(reviews[currentReview].rating)}</div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{reviews[currentReview].text}"
                </blockquote>
                <div className="border-t pt-4">
                  <h4 className="text-xl font-semibold text-gray-800">{reviews[currentReview].name}</h4>
                  <p className="text-gray-600">{reviews[currentReview].location}</p>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {reviews[currentReview].service}
                  </span>
                </div>
              </div>

              <button 
                onClick={nextReview}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;