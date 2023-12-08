import React, { useState, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import "./contact.css"
import "./contactresponsive.css"

const ContactSecondSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const [click, setClick] = useState()
    function isClicked() {
        setClick(!click)
    }

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".contact-container"), {
            max: 5,
            speed: 10,
            glare: true,
            'max-glare': 0.50
        })

        VanillaTilt.init(document.querySelectorAll(".contact-container-succes"), {
            max: 5,
            speed: 10,
            glare: true,
            'max-glare': 0.50
        })
    })
    return (
            <section className='contact-section'>
                <div className='contact-main-container'>
                    <div className={click ? 'contact-container d-none' : 'contact-container'}>
                        <div className='feedback-head'>
                            <span>Feedback</span>
                        </div>
                        <div className='feedback-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder='Name'
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        placeholder='Surname'
                                        required

                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email'
                                        required

                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Please write your feedback here'
                                        required

                                    />
                                </div>
                                <div className='feedback-btn'>
                                    <button className='feedback-submit' type="submit" onClick={isClicked}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={click ? 'contact-container-succes' : 'contact-container-succes d-none'}>
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                        </div>
                        <div className='succes-container-content'>
                            <span>Thank you for contacting us!</span>
                        </div>

                    </div>
                </div>
            </section>
            
    )
}

export default ContactSecondSection