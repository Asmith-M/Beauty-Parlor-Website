import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <footer className="bg-primary text-white pt-10 pb-5 w-full mt-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">About Us</h3>
            <p className="text-gray-300">
              At Beauty Parlour, we believe in providing the best services to our customers.
              From haircut to manicure, we aim to pamper you with professional care and utmost
              dedication.
            </p>
          </div>

          {/* Contact Section */}
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Contact Us</h3>
            <ul className="text-gray-300 space-y-2">
              <li>📧 info@beautyparlour.com</li>
              <li>📞 +1234567890</li>
              <li>📍 123 Beauty Street, Glamour City</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6 bg-primary rounded-full" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6 bg-primary rounded-full" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
                <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6 bg-primary rounded-full" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input type="text" placeholder="Your Name" required className="px-3 py-2 mb-3 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary" />
              <input type="email" placeholder="Your Email" required className="px-3 py-2 mb-3 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary" />
              <textarea placeholder="Your Message" rows="4" required className="px-3 py-2 mb-3 border border-gray-300 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
              <button type="submit" className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-secondary-dark font-bold self-start">Send Message</button>
            </form>
          </div>

          {/* Hours Section */}
          <div className="p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Salon Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-2 border-dashed border-secondary p-5 rounded-lg mt-5">
          <h3 className="text-2xl font-semibold mb-2">Ready for a Transformation?</h3>
          <p className="mb-4">Book your appointment today and experience ultimate relaxation!</p>
          <button className="bg-secondary text-white px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-secondary-dark font-bold" onClick={() => navigate("/booking")}>
            Book Now
          </button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 pt-5 border-t border-white/20">
          <p className="text-sm text-gray-400">© 2025 Beauty Parlour. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;