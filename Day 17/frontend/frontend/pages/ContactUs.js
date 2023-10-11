import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here.
    console.log('Form Data:', formData);
    // You may want to send this data to your backend or take any other action.
  };

  return (
    <div id="contact-us-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with your questions or feedback.</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='contact-label' htmlFor="name">Name:</label>
          <input className="contact-input"
            type="text"
            id="namecon"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="contact-label" htmlFor="email">Email:</label>
          <input className="contact-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="contact-label" htmlFor="message">Message:</label>
          <textarea className='contact-textarea'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="contact-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
