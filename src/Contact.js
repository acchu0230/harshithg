import React from "react";
import './Contact.css';
import { FaLinkedin, FaWhatsapp ,FaEnvelope} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            {/* <h1 className="contact-title">Contact Me</h1> */}
            <p className="contact-description">Feel free to reach out to me through the following channels:</p>
            <div className="contact-links">
                <a 
                    href="https://www.linkedin.com/in/harshith-g-a09a11281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                >
                    <FaLinkedin className="contact-icon" />
                    LinkedIn
                </a>
                <a 
                    href="https://wa.me/+918904700758" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                >
                    <FaWhatsapp className="contact-icon" />
                    WhatsApp
                </a>
                <a 
                    href="mailto:acchu7619@gmail.com" 
                    className="contact-link"
                >
                    <FaEnvelope className="contact-icon" />
                    Gmail
                </a>
                    
            </div>
        </div>
    );
};

export default Contact;