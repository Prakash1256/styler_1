import React from 'react';

const PartnerSection = () => {
  const partnerImages = [
    "https://www.lookssalon.in/public/images//brands/Loreal_edited.webp",
    "https://www.lookssalon.in/public/images//brands/Kerastase-Logo.webp",
    "https://www.lookssalon.in/public/images//brands/olaplex-vector-logo_edited.webp",
    "https://www.lookssalon.in/public/images//brands/Moroccanoil-Logo.webp",
    "https://www.lookssalon.in/public/images//brands/main-brasil-cacau-order-form_edited.webp",
    "https://www.lookssalon.in/public/images//brands/png-clipart-balmain-paris-logo-balmain-logo-icons-logos-emojis-iconic-brands_edited_edited.webp",
    "https://www.lookssalon.in/public/images//brands/biotop.webp",
    "https://www.lookssalon.in/public/images//brands/wahl-logo.webp",
    "https://www.lookssalon.in/public/images//brands/dyson.webp",
    "https://www.lookssalon.in/public/images//brands/wet_brush.webp",
    "https://www.lookssalon.in/public/images//brands/american-crew.webp"
  ];

  return (
    <section id="partner" data-aos="fade-up" data-aos-duration="1000">
      <h1>Our Partner Brands</h1>
      <div className="partner">
        {partnerImages.map((src, index) => (
          <div className="partner-card" key={index}>
            <img src={src} alt="Partner Brand" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
