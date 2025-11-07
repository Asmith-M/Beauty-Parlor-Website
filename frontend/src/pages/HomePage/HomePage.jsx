import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/GlassCard';
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
            link: '/booking',
            icon: '✨'
        },
        { 
            imageUrl: haircut, 
            title: 'Haircuts', 
            description: 'Get a stylish haircut from our expert stylists.', 
            link: '/booking',
            icon: '💇'
        },
        { 
            imageUrl: manicure, 
            title: 'Manicures & Pedicures', 
            description: 'Pamper your hands and feet with our nail services.', 
            link: '/booking',
            icon: '💅'
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
            <section 
                className="relative text-center py-32 px-5 bg-cover bg-center text-white shadow-2xl flex flex-col justify-center items-center overflow-hidden" 
                style={{ backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.6), rgba(255, 105, 180, 0.6)), url(${parlourBanner})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                <div className="relative z-10 fade-in">
                    <h1 className="text-6xl font-serif font-bold mb-6 drop-shadow-lg">Pamper Yourself with Expert Care!</h1>
                    <p className="text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">Experience the ultimate relaxation and beauty transformation with our premium services.</p>
                    <Link 
                        to="/booking" 
                        className="inline-block bg-gradient-to-r from-secondary to-secondary-dark text-white py-4 px-10 rounded-full text-lg font-bold cursor-pointer no-underline transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 transform"
                    >
                        Book Your Appointment
                    </Link>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16 px-5 mb-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-serif font-bold text-primary mb-6 text-center fade-in">Welcome to Beauty Parlour</h2>
                    <p className="text-center mb-12 text-lg text-gray-700 max-w-3xl mx-auto">
                        Where beauty meets expertise. We offer a comprehensive range of beauty services 
                        using premium organic products and delivered by our team of professional stylists. 
                        Our mission is to make you look and feel your absolute best.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="text-center p-8">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-2xl font-bold mb-3 text-primary">Premium Products</h3>
                            <p className="text-gray-600">Only the finest organic products for your skin and hair</p>
                        </GlassCard>
                        <GlassCard className="text-center p-8">
                            <div className="text-5xl mb-4">👩‍🎨</div>
                            <h3 className="text-2xl font-bold mb-3 text-primary">Expert Stylists</h3>
                            <p className="text-gray-600">Certified professionals with years of experience</p>
                        </GlassCard>
                        <GlassCard className="text-center p-8">
                            <div className="text-5xl mb-4">💆</div>
                            <h3 className="text-2xl font-bold mb-3 text-primary">Relaxing Ambiance</h3>
                            <p className="text-gray-600">Tranquil environment designed for your comfort</p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-5 mb-10 bg-gradient-to-b from-bg to-bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-serif font-bold text-primary mb-12 text-center">Our Signature Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <GlassCard key={index} className="overflow-hidden group">
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img 
                                        src={service.imageUrl} 
                                        alt={service.title} 
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <span className="text-white text-5xl">{service.icon}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                                <p className="mb-6 text-gray-600">{service.description}</p>
                                <Link 
                                    to={service.link} 
                                    className="inline-block bg-gradient-to-r from-secondary to-secondary-dark text-white py-3 px-6 rounded-full no-underline transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 font-semibold"
                                >
                                    Book Now
                                </Link>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-5 mb-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-serif font-bold text-primary mb-12 text-center">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <GlassCard key={index} className="relative">
                                <div className="absolute top-4 right-4 text-6xl text-accent/20 font-serif">"</div>
                                <div className="text-yellow-400 text-2xl mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                                <p className="italic my-4 text-gray-700 relative z-10">"{testimonial.text}"</p>
                                <p className="font-bold text-right text-primary">— {testimonial.author}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offers Section */}
            <section className="py-16 px-5 mb-10 text-center bg-gradient-to-r from-primary to-primary-light text-white rounded-3xl mx-5 shadow-2xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-serif font-bold mb-6">Special Offer</h2>
                    <p className="text-2xl mb-8">Get 20% off on your first booking!</p>
                    <Link 
                        to="/booking" 
                        className="inline-block bg-white text-primary py-4 px-10 rounded-full text-lg font-bold no-underline transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        Claim Your Discount
                    </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-serif font-bold text-primary mb-12 text-center">Visit Us</h2>
                    <GlassCard className="overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.942767224535!2d-73.98513008456108!3d40.74881707928641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3ad886f%3A0x6b6c00c2b2c83c17!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1622081665476!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Salon Location"
                        ></iframe>
                    </GlassCard>
                </div>
            </section>
        </div>
    );
};

export default HomePage;