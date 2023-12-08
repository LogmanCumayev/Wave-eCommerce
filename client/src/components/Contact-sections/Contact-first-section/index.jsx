import React from 'react'
import './contactfirstsection.css'
// SVG
import contactSVGBg1 from './contactfirstBg.svg'
const ContactFirstSection = () => {
    return (
        <section className='contact-first-section'>
            <div className='contact-first-section-content'>
                <span>Contact</span>
            </div>
            <img  className='contact-wave-bg' src={contactSVGBg1} />
        </section>
    )
}

export default ContactFirstSection