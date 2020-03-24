import React from 'react';
import '../styles/Contact.css'
const Contact = () => {
    return (
        <div className="contact-section">
            <div className="info-block"><h1 className="title">kontakt</h1>

                <div className="phone-number">
                    <i className="fas fa-phone"></i>
                    <p className="phone-number-text">123 456 789</p>
                </div>
                <div className="e-mail">
                    <i className="fas fa-envelope"></i>
                    <p className="e-mail-text">example@gmail.com</p>
                </div>
                <div className="address">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="address-text">Gdańska 4</p>
                    <p className="address-text">82-103 Jantar</p>
                </div>



            </div>
            <div className="map-block"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.3392853684145!2d19.048964316018974!3d54.333311108025576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd3ff8116ed7f3%3A0x25bb9bc4e09a6480!2sGda%C5%84ska%204%2C%2082-103%20Jantar!5e0!3m2!1spl!2spl!4v1583872804117!5m2!1spl!2spl" width="auto" height="450" frameBorder="0" allowFullScreen=""></iframe></div>
        </div>
    );
}

export default Contact;
