import React, { useState, useEffect } from 'react';

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(children)
  const slides = React.useRef([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.current.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  function showSlide(index) {
    slides.current.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.current.length);
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.current.length) % slides.current.length);
  }

  return (
    <div className="carousel">
      {React.Children.map(children, (child, index) => (
        <div
          ref={(el) => (slides.current[index] = el)}
          className="carousel-slide"
        >
          {child}
        </div>
      ))}
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
      <style jsx>{`
        .carousel {
          position: relative;
          overflow: hidden;
        }
        .carousel-slide {
          display: flex;
          flex: none;
          transition: transform 0.5s ease;
        }
      `}</style>
    </div>
  );
}

export default Carousel;
