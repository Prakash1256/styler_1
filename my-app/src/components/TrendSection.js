import React from 'react';
import { images } from '../images';

const TrendSection = () => {
  return (
    <section id="trend" data-aos="fade-up" data-aos-duration="1000">
      <div className="trend">
        {images.trend.map((src, index) => (
          <div className="trend-card" key={index}>
            <img src={src} alt="Trend" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendSection;
