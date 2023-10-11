import React from 'react';
import '../pages/AboutUs.css' // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className='ab-h1'>About Us</h1>
      <p className='ab-p'>
        Welcome to our Pharmacy Management System. We are dedicated to providing top-quality pharmacy services and healthcare solutions.
      </p>
      <h2 className='ab-h2'>Our Mission</h2>
      <p className='ab-p'>
        Our mission is to improve the health and well-being of our community by providing accessible, affordable, and high-quality pharmacy services.
      </p>
      <h2 className='ab-h2'>Our Vision</h2>
      <p className='ab-p'>
        Our vision is to be a trusted partner in healthcare, ensuring that patients receive the best possible care and support for their medication needs.
      </p> 
      <h2 className='ab-h2'>Our Team</h2>
      <p className='ab-p'>
        Our dedicated team of pharmacists and professionals work tirelessly to ensure your health and satisfaction.
      </p>
    </div>
  );
};

export default AboutUs;
