import React, { useEffect, useRef } from 'react';
import '../CSSFiles/Contact.css';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-container", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="contact" ref={containerRef} className="contact-section">
      <div className="contact-bg-glow"></div>

      <div className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info-side">
          <div className="contact-header">
            <h2>Let's chat.</h2>
            <h2>Tell me about your project.</h2>
            <p className="mt-4">Let's create something together. I'm open for new opportunities and interesting projects.</p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Icon icon="ic:round-email" />
              </div>
              <span>manojfa4451e@gmail.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Icon icon="ic:round-phone" />
              </div>
              <span>+91 81220 84966</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Icon icon="ic:round-location-on" />
              </div>
              <span>Remote / India</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-btn"><Icon icon="mdi:github" /></a>
            <a href="#" className="social-btn"><Icon icon="mdi:linkedin" /></a>
            <a href="#" className="social-btn"><Icon icon="mdi:twitter" /></a>
            <a href="#" className="social-btn"><Icon icon="mdi:instagram" /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-side">
          <form action="" className="w-full">
            <div className="form-group">
              <input type="text" className="form-input" placeholder=" " required />
              <label className="form-label">Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" className="form-input" placeholder=" " required />
              <label className="form-label">Email Address</label>
            </div>

            <div className="form-group">
              <input type="text" className="form-input" placeholder=" " required />
              <label className="form-label">Subject</label>
            </div>

            <div className="form-group">
              <textarea className="form-input textarea" placeholder=" " rows="1" required></textarea>
              <label className="form-label">Message</label>
            </div>

            <button type="submit" className="submit-btn max-w-xs">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;