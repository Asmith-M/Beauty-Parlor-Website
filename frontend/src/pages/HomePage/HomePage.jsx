import React from 'react';
import { Link } from 'react-router-dom';
import parlourBanner from '../images/parlour-banner.jpg';
import facial from '../images/facial.jpg';
import haircut from '../images/haircut.jpg';
import manicure from '../images/manicure.jpg';

const HomePage = () => {
    const services = [
        { 
            imageUrl: facial, 
            title: 'Facials', 
            description: 'Rejuvenate your skin with our luxurious facials.', 
            link: '/booking' 
        },
        { 
            imageUrl: haircut, 
            title: 'Haircuts', 
            description: 'Get a stylish haircut from our expert stylists.', 
            link: '/booking' 
        },
        { 
            imageUrl: manicure, 
            title: 'Manicures & Pedicures', 
            description: 'Pamper your hands and feet with our nail services.', 
            link: '/booking' 
        },
    ];

    const testimonials = [
        {
            text: "Amazing experience! The staff was so friendly and professional. I left feeling absolutely beautiful!",
            author: "Jane Doe",
            rating: 5
        },
        {
            text: "Best salon I've ever been to. The attention to detail is incredible. Highly recommend!",
            author: "John Smith",
            rating: 5
        },
        {
            text: "Love the ambiance and the quality of service. Will definitely be coming back!",
            author: "Sarah Johnson",
            rating: 5
        }
    ];

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section className="text-center py-24 px-5 bg-cover bg-center text-white shadow-lg flex flex-col justify-center items-center" style={{ backgroundImage: `url(${parlourBanner})` }}>
                <h1 className="text-5xl font-serif font-bold mb-5 text-shadow-lg">Pamper Yourself with Expert Care!</h1>
                <p className="text-lg mb-8 text-shadow">Experience the ultimate relaxation and beauty transformation.</p>
                <Link to="/booking" className="bg-primary text-white py-3 px-8 rounded-md text-lg cursor-pointer no-underline transition-colors duration-300 ease-in-out hover:bg-secondary">Book Your Appointment</Link>
            </section>

            {/* About Us Section */}
            <section className="py-10 px-5 mb-10 bg-gray-100 rounded-lg">
                <h2 className="text-4xl font-serif font-bold text-primary mb-5 text-center">Welcome to Beauty Parlour</h2>
                <p className="text-center mb-8">
                    Where beauty meets expertise. We offer a comprehensive range of beauty services 
                    using premium organic products and delivered by our team of professional stylists. 
                    Our mission is to make you look and feel your absolute best.
                </p>
                <div className="flex justify-around flex-wrap">
                    <div className="text-center p-5">
                        <span className="text-3xl">✨</span>
                        <h3 className="text-xl font-bold mt-2">Premium Products</h3>
                        <p>Only the finest organic products</p>
                    </div>
                    <div className="text-center p-5">
                        <span className="text-3xl">👩‍🎨</span>
                        <h3 className="text-xl font-bold mt-2">Expert Stylists</h3>
                        <p>Certified professionals with years of experience</p>
                    </div>
                    <div className="text-center p-5">
                        <span className="text-3xl">💆</span>
                        <h3 className="text-xl font-bold mt-2">Relaxing Ambiance</h3>
                        <p>Tranquil environment for your comfort</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-10 px-5 mb-10">
                <h2 className="text-4xl font-serif font-bold text-primary mb-5 text-center">Our Signature Services</h2>
                <div className="flex justify-around flex-wrap">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center p-5 bg-white rounded-lg shadow-md text-center w-full md:w-1/3 m-3">
                            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="mb-5">{service.description}</p>
                            <Link to={service.link} className="mt-auto bg-secondary text-white py-2 px-6 rounded-md no-underline transition-colors duration-300 ease-in-out hover:bg-primary">Book Now</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-10 px-5 mb-10 bg-gray-100 rounded-lg">
                <h2 className="text-4xl font-serif font-bold text-primary mb-5 text-center">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                            <div className="text-yellow-400 text-2xl">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="italic my-4">"{testimonial.text}"</p>
                            <p className="font-bold text-right">— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Special Offers Section */}
            <section className="py-10 px-5 mb-10 text-center">
                <h2 className="text-4xl font-serif font-bold text-primary mb-5">Special Offer</h2>
                <p className="text-lg">Get 20% off on your first booking!</p>
            </section>

            {/* Contact Section */}
            <section className="py-10 px-5 bg-gray-100 rounded-lg">
                <h2 className="text-4xl font-serif font-bold text-primary mb-5 text-center">Visit Us</h2>
                <div className="w-full h-80 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.942767224535!2d-73.98513008456108!3d40.74881707928641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3ad886f%3A0x6b6c00c2b2c83c17!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1622081665476!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Salon Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default HomePage;