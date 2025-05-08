import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import "./Home.css";
import CategorySection from "../components/Categories";

const carouselImages = ["/image-1.jpg", "/image-2.jpg", "/image-3.jpg"];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-section">
        <h1>
          Welcome to{" "}
          <div className="typewriter">
            {" "}
            <span>ShoppyGlobe</span>
          </div>
        </h1>
        <p>Your one-stop shop for everything trendy and essential</p>
        <button className="shop-button">Start Shopping</button>
      </div>

      <div className="carousel">
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`carousel-img ${idx === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>

      <div>
        <CategorySection />
      </div>
    </>
  );
}
