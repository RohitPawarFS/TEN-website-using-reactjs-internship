import React, { useState } from 'react';
import { SliderData } from './Tesimonalmentorship';
import './TestimonialsPage.css';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSliderMentorship = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow1' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow1' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active1' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='images1'>
                        <p>{slide.title}</p>
                        <p>{slide.head}</p>
                        <p>{slide.head1}</p>
                        <br/>
                        <h1>{slide.author}</h1>
              </div>
              
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSliderMentorship;