import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Nissen",
      location: "vor einem Monat",
      rating: 5,
      text: "Ich möchte mich für die tolle Arbeit bedanken! Die Grundreinigung, nach der Modernisierung in unserem Haus, wurde 1a durchgeführt! Der Chef hat sogar noch extra Reinigungen durchgeführt (kostenfrei!). Vielen vielen Dank!! Wir können KlarerNorden nur weiterempfehlen!!",
      service: "Grundreinigung"
    },
    {
      id: 2,
      name: "Lara Richardsen",
      location: "vor einem Monat",
      rating: 5,
      text: "Ich habe die Fenster- und Glasreinigung von KlarerNorden in Anspruch genommen und bin absolut begeistert vom Ergebnis! Die Fenster sehen aus wie neu, und der Unterschied war sofort sichtbar. Besonders beeindruckt hat mich die Gründlichkeit und Professionalität des Teams – pünktlich, freundlich und sehr sorgfältig bei der Arbeit.",
      service: "Fenster- und Glasreinigung"
    },
    {
      id: 3,
      name: "Aida Gevorgyan",
      location: "vor 2 Monaten",
      rating: 5,
      text: "Sehr gute Reinigung - Preis-Leistung sehr toll! Die Qualität hat meine Erwartungen übertroffen und der Service ist gut. Sind mir auch fair entgegengekommen, da ich außerhalb wohne!",
      service: "Reinigungsservice"
    },
    {
      id: 4,
      name: "Hedda",
      location: "vor einem Monat",
      rating: 5,
      text: "Ausgezeichneter Service und freundliches Personal! Ich bin sehr zufrieden mit dem Ergebnis und kann KlarerNorden wärmstens weiterempfehlen :)",
      service: "Reinigungsservice"
    },
    {
      id: 5,
      name: "Gajana G.",
      location: "vor 2 Monaten",
      rating: 5,
      text: "Wir wollen uns herzlich beim Team vom KlarerNorden bedanken. Unser Sofa ist wieder sehr sauber und sieht neu aus. Danke!",
      service: "Polsterreinigung"
    },
    {
      id: 6,
      name: "Gor",
      location: "vor 2 Monaten",
      rating: 5,
      text: "Ich hatte Herrn Grigoryan mit meinem Wintergarten und den Fenstern am Haus beauftragt. Mit dem Endergebnis bin ich super zufrieden. Ich werde ihn auf jeden Fall erneut beauftragen.",
      service: "Wintergarten- & Fensterreinigung"
    },
    {
      id: 7,
      name: "Kiara",
      location: "vor einem Monat",
      rating: 5,
      text: "Eine Freundin von mir hat von euch erzählt und euch empfohlen. Danke nochmal für den kurzfristigen Termin vorgestern! Die Solarpanele meines Vaters sind wie neu und bereit für den Sommer 😊",
      service: "Solaranlagen-Reinigung"
    },
    {
      id: 8,
      name: "Claudia Feddersen",
      location: "vor einem Monat",
      rating: 5,
      text: "Super Arbeit, schnell und zuverlässig. Ist auf jeden Fall weiterzuempfehlen. Immer gerne wieder!",
      service: "Reinigungsservice"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Bewertungen von echten Kunden. Hier erfahren Sie, was unsere zufriedenen Kunden über unsere Reinigungsdienstleistungen sagen.
          </p>
          <div className="mt-6">
            <a 
              href="https://www.google.com/search?sa=X&sca_esv=70c4004f48b74267&hl=de&gl=de&tbm=lcl&sxsrf=AE3TifOP_jnHj6dyFB3PJ-7F3Y61YO0vJw:1752382631943&q=KlarerNorden+Reinigungsdienst+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxtDAysDA0tTQwNTQ1tDQEAnOLDYyMrxg1vXMSi1KL_PKLUlLzFIJSM_My00vz0otTMlPzikuAAlVAOjM_LzVvESvxagHOnVyCcwAAAA&rldimm=18208159051519111178&ved=2ahUKEwjLm6aChrmOAxWKQ_EDHTWJKqUQ9fQKegQIRBAF&biw=1366&bih=645&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Alle Bewertungen auf Google ansehen
            </a>
          </div>
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
                <div className="h-32 flex items-center justify-center mb-6">
                  <blockquote className="text-lg text-gray-700 italic overflow-hidden">
                    "{reviews[currentReview].text}"
                  </blockquote>
                </div>
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
            <div className="text-4xl font-bold text-blue-600 mb-2">279+</div>
            <p className="text-gray-600">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.5★</div>
            <p className="text-gray-600">Durchschnittliche Bewertung</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">340+</div>
            <p className="text-gray-600">Projekte abgeschlossen</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
            <p className="text-gray-600">Jahre Erfahrung</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;