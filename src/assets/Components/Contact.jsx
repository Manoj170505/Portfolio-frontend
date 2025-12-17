import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ ...status, error: '', success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      await axios.post(`${API_URL}/contact`, formData);
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.response?.data?.error || 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <div id="contact" ref={containerRef} className="contact-section min-h-screen flex justify-center items-center p-4 md:p-8 relative overflow-hidden z-10">

      <div className="contact-container relative z-10 w-full max-w-6xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Info */}
        <div className="contact-info-side flex-1 bg-gradient-to-br from-[#4f46e5]/90 to-[#06b6d4]/90 p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="contact-header mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Let's chat.</h2>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight opacity-90">Tell me about your project.</h2>
            <p className="mt-4 text-lg opacity-90 leading-relaxed">Let's create something together. I'm open for new opportunities and interesting projects.</p>
          </div>

          <div className="contact-details flex flex-col gap-6 mt-8 md:mt-12 hidden md:flex">
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center text-2xl backdrop-blur-sm">
                <Icon icon="ic:round-email" />
              </div>
              <span>manojfa4451e@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center text-2xl backdrop-blur-sm">
                <Icon icon="ic:round-phone" />
              </div>
              <span>+91 81220 84966</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex justify-center items-center text-2xl backdrop-blur-sm">
                <Icon icon="ic:round-location-on" />
              </div>
              <span>Erode / Tamil Nadu</span>
            </div>
          </div>

          <div className="social-links flex gap-4 mt-12">
            {["mdi:github", "mdi:linkedin", "mdi:pinterest", "mdi:instagram"].map((icon, index) => (
              <a key={index} href="#" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-xl text-white hover:bg-white hover:text-[#4f46e5] hover:-translate-y-1 transition-all duration-300">
                <Icon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-side flex-[1.5] p-8 md:p-12 bg-white/80 dark:bg-black/40 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            
            {status.success && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-700 dark:text-green-400 font-medium animate-fade-in flex items-center gap-2">
                <Icon icon="mdi:check-circle" className="text-xl" />
                Message sent successfully!
              </div>
            )}
            
            {status.error && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-700 dark:text-red-400 font-medium animate-fade-in flex items-center gap-2">
                 <Icon icon="mdi:alert-circle" className="text-xl" />
                {status.error}
              </div>
            )}

            <div className="group relative">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full py-2 text-lg text-gray-900 dark:text-white border-b-2 border-gray-400 dark:border-gray-600 outline-none bg-transparent focus:border-[#0c8cf5] transition-colors placeholder-transparent" 
                placeholder="Your Name" 
                required 
              />
              <label className="absolute -top-6 left-0 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0c8cf5]">Your Name</label>
            </div>

            <div className="group relative">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full py-2 text-lg text-gray-900 dark:text-white border-b-2 border-gray-400 dark:border-gray-600 outline-none bg-transparent focus:border-[#0c8cf5] transition-colors placeholder-transparent" 
                placeholder="Email Address" 
                required 
              />
              <label className="absolute -top-6 left-0 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0c8cf5]">Email Address</label>
            </div>

            <div className="group relative">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="peer w-full py-2 text-lg text-gray-900 dark:text-white border-b-2 border-gray-400 dark:border-gray-600 outline-none bg-transparent focus:border-[#0c8cf5] transition-colors placeholder-transparent" 
                placeholder="Subject" 
                required 
              />
              <label className="absolute -top-6 left-0 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0c8cf5]">Subject</label>
            </div>

            <div className="group relative">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full py-2 text-lg text-gray-900 dark:text-white border-b-2 border-gray-400 dark:border-gray-600 outline-none bg-transparent focus:border-[#0c8cf5] transition-colors placeholder-transparent resize-none min-h-[40px] focus:min-h-[100px]" 
                placeholder="Message" 
                rows="1" 
                required
              ></textarea>
              <label className="absolute -top-6 left-0 text-gray-500 dark:text-gray-400 text-sm pointer-events-none transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-lg peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0c8cf5]">Message</label>
            </div>

            <button 
              type="submit" 
              disabled={status.loading}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {status.loading ? (
                <>
                  <Icon icon="line-md:loading-twotone-loop" className="animate-spin text-2xl" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;