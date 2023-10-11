import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQ = () => {
    // Define an array of FAQ items (questions and answers)
    const faqItems = [
        {
            question: 'How do I refill my prescription?',
            answer: 'You can refill your prescription by logging into your account on our website and following the prescription refill process.'
        },
        {
            question: 'What are your operating hours?',
            answer: 'Our pharmacy is open from 9:00 AM to 6:00 PM, Monday to Friday, and 10:00 AM to 4:00 PM on Saturdays. We are closed on Sundays.'
        },
        {
            question: 'What is Pharmacy Management?',
            answer: 'Pharmacy management refers to the process of overseeing and optimizing the operations of a pharmacy, including inventory management, prescription filling, and patient services.'
        },
        {
            question: 'What Strategies Can Help Manage Medication Shortages?',
            answer: 'Strategies include monitoring shortages, seeking alternative suppliers, and working with healthcare providers to find suitable substitutions.'
        },
        
        // Add more FAQ items as needed
    ];

    // Initialize state to keep track of which FAQ item is currently expanded
    const [activeItem, setActiveItem] = useState(null);

    // Function to toggle the active FAQ item
    const toggleItem = (index) => {
        if (activeItem === index) {
            // If the clicked item is already active, close it
            setActiveItem(null);
        } else {
            // Otherwise, open the clicked item
            setActiveItem(index);
        }
    };

    return (
        <div className='faq-main'>
        <div className="faq-container">
            <h2 className='faq-h2'>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button className={`faq-question ${activeItem === index ? 'active' : ''}`} onClick={() => toggleItem(index)}>
                            {item.question}
                        </button>
                        {activeItem === index && <p className="faq-answer">{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default FAQ;