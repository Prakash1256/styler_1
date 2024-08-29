import React from 'react';
import { images } from '../images'; 

const CategorySection = () => {
  return (
    <section id="category" data-aos="fade-up" data-aos-duration="1000">
      <h1>Our Services</h1>
      <div className="category">
        {images.category.map((item, index) => (
          <div className="category-card" key={index}>
            <h1>{item.title}</h1>
            <img src={item.src} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
