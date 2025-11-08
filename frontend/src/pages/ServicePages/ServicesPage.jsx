import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, DollarSign, ArrowRight, Sparkles, Calendar, Scissors, Heart, Hand, Footprints } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import haircutImage from '../images/haircut.jpg';
import facialImage from '../images/facial.jpg';
import manicureImage from '../images/manicure.jpg';
import pedicureImage from '../images/pedicure.jpg';

const ServicesPage = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            name: 'Haircut',
            description: 'A professional haircut tailored to your style and preferences.',
            fullDescription: 'Experience a transformative haircut from our expert stylists who understand the latest trends and techniques.',
            price: '$30',
            time: '45 minutes',
            imageUrl: haircutImage,
            link: '/services/haircut',
            features: ['Consultation', 'Wash & Cut', 'Styling', 'Finishing'],
            icon: Scissors,
            color: 'from-purple-500 to-pink-500',
        },
        {
            id: 2,
            name: 'Facial',
            description: 'A rejuvenating facial to cleanse, exfoliate, and nourish your skin.',
            fullDescription: 'Indulge in a luxurious facial treatment that will leave your skin glowing and refreshed.',
            price: '$50',
            time: '60 minutes',
            imageUrl: facialImage,
            link: '/services/facial',
            features: ['Deep Cleansing', 'Exfoliation', 'Mask Treatment', 'Moisturizing'],
            icon: Heart,
            color: 'from-rose-500 to-pink-500',
        },
        {
            id: 3,
            name: 'Manicure',
            description: 'A relaxing manicure to keep your nails looking their best.',
            fullDescription: 'Pamper your hands with our premium manicure service using high-quality products.',
            price: '$25',
            time: '45 minutes',
            imageUrl: manicureImage,
            link: '/services/manicure',
            features: ['Nail Shaping', 'Cuticle Care', 'Polish', 'Hand Massage'],
            icon: Hand,
            color: 'from-pink-500 to-red-500',
        },
        {
            id: 4,
            name: 'Pedicure',
            description: 'A comprehensive pedicure to pamper your feet and keep them healthy.',
            fullDescription: 'Treat your feet to a relaxing pedicure that includes exfoliation, massage, and polish.',
            price: '$40',
            time: '60 minutes',
            imageUrl: pedicureImage,
            link: '/services/pedicure',
            features: ['Foot Soak', 'Exfoliation', 'Nail Care', 'Foot Massage'],
            icon: Footprints,
            color: 'from-indigo-500 to-purple-500',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg py-16 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 fade-in">
                    <Sparkles className="mx-auto mb-6 text-primary" size={64} />
                    <h1 className="text-6xl font-serif font-bold text-primary mb-6">Our Premium Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our range of professional beauty treatments designed to make you look and feel your absolute best
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <GlassCard key={service.id} className="overflow-hidden group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative">
                                    {/* Image Section */}
                                    <div className="relative overflow-hidden rounded-t-2xl">
                                        <img
                                            src={service.imageUrl}
                                            alt={service.name}
                                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                        {/* Icon Overlay */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                            <IconComponent className="text-primary" size={24} />
                                        </div>

                                        {/* Premium Badge */}
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                                            <Sparkles size={14} />
                                            <span>Premium</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8">
                                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">{service.name}</h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <span key={idx} className="bg-accent/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price & Time */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center space-x-2">
                                                <DollarSign className="text-secondary" size={20} />
                                                <span className="text-2xl font-bold text-primary">{service.price}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Clock className="text-secondary" size={20} />
                                                <span className="text-gray-600 font-medium">{service.time}</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-4">
                                            <Link
                                                to={service.link}
                                                className="flex-1 bg-white border-2 border-primary text-primary py-3 px-6 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group"
                                            >
                                                <span>Learn More</span>
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                            <button
                                                onClick={() => navigate(`/booking?service=${service.name.toLowerCase()}`)}
                                                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                                            >
                                                <Calendar size={18} />
                                                <span>Book Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <GlassCard className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white p-12 text-center">
                    <Sparkles className="mx-auto mb-6" size={48} />
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Your Look?</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Book your appointment today and experience the difference our premium services can make
                    </p>
                    <button
                        onClick={() => navigate('/booking')}
                        className="inline-flex items-center space-x-2 bg-white text-primary py-4 px-8 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <Calendar size={20} />
                        <span>Book Your Appointment</span>
                    </button>
                </GlassCard>
            </div>
        </div>
    );
};

export default ServicesPage;