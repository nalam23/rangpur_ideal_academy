import React from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Rangpur Ideal Academy</h1>
        <p>A Modern School for Future Leaders</p>
        <Link to="/admission" className="hero-button">
          Apply for Admission
        </Link>
      </div>
    </section>
  )
}

export default HeroSection