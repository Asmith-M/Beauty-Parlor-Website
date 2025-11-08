import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, Scissors, Calendar, ArrowRight } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import haircutImage from '../images/haircut.jpg';

const HaircutPage = () => {
    const navigate = useNavigate();

    const steps = [
        'Consultation to understand your preferences',
        'Washing and conditioning your hair',
        'Cutting and styling your hair as desired',
        'Final touches and styling tips'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg py-16 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 fade-in">
                    <Scissors className="mx-auto mb-6 text-primary" size={64} />
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Professional Haircut Service</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your look with our expert stylists who craft the perfect haircut tailored to your style and preferences.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Image Section */}
                    <div className="fade-in">
                        <GlassCard className="overflow-hidden">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={haircutImage}
                                    alt="Haircut Service"
                                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8 fade-in">
                        <GlassCard className="p-8">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Service Details</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our professional haircut service is tailored to your style and preferences. Our experienced stylists will ensure you leave with a look you love.
                            </p>

                            {/* Price & Time */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="text-secondary" size={24} />
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-2xl font-bold text-primary">$30</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="text-secondary" size={24} />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="text-2xl font-bold text-primary">45 min</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Steps */}
                        <GlassCard className="p-8">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">What to Expect</h3>
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-600">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Precautions */}
                        <GlassCard className="p-8 border-l-4 border-accent">
                            <h3 className="text-xl font-bold text-primary mb-4">Important Notes</h3>
                            <p className="text-gray-600">
                                Please inform your stylist of any allergies or sensitivities you may have to ensure a safe and comfortable experience.
                            </p>
                        </GlassCard>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <GlassCard className="p-8 bg-gradient-to-r from-primary to-primary-light text-white">
                        <h2 className="text-3xl font-serif font-bold mb-4">Ready for Your New Look?</h2>
                        <p className="text-lg mb-8 opacity-90">Book your appointment today and let our experts transform your hair!</p>
                        <button
                            onClick={() => navigate('/booking?service=haircut')}
                            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Calendar size={20} />
                            <span>Book Your Haircut</span>
                            <ArrowRight size={20} />
                        </button>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default HaircutPage;
