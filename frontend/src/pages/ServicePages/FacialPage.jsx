import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import facialImage from '../images/facial.jpg';

const FacialPage = () => {
    const navigate = useNavigate();

    const steps = [
        'Cleansing to remove impurities and makeup',
        'Exfoliation to remove dead skin cells',
        'Steaming to open pores and soften the skin',
        'Extraction of blackheads and whiteheads',
        'Application of a face mask tailored to your skin type',
        'Massage to improve circulation and relaxation',
        'Application of toner and moisturizer'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg py-16 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 fade-in">
                    <Sparkles className="mx-auto mb-6 text-primary" size={64} />
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Rejuvenating Facial Treatment</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Indulge in our luxurious facial treatment designed to cleanse, exfoliate, and nourish your skin, leaving you with a refreshed and glowing complexion.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Image Section */}
                    <div className="fade-in">
                        <GlassCard className="overflow-hidden">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={facialImage}
                                    alt="Facial Service"
                                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-8 fade-in">
                        <GlassCard className="p-8">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Treatment Details</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our rejuvenating facial is designed to cleanse, exfoliate, and nourish your skin, leaving you with a refreshed and glowing complexion.
                            </p>

                            {/* Price & Time */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="text-secondary" size={24} />
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-2xl font-bold text-primary">$50</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="text-secondary" size={24} />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="text-2xl font-bold text-primary">60 min</p>
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
                                Please inform your esthetician of any skin sensitivities or allergies you may have to ensure a safe and comfortable experience.
                            </p>
                        </GlassCard>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <GlassCard className="p-8 bg-gradient-to-r from-primary to-primary-light text-white">
                        <h2 className="text-3xl font-serif font-bold mb-4">Glow Up Your Skin Today!</h2>
                        <p className="text-lg mb-8 opacity-90">Book your facial treatment and reveal your most radiant complexion!</p>
                        <button
                            onClick={() => navigate('/booking?service=facial')}
                            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Calendar size={20} />
                            <span>Book Your Facial</span>
                            <ArrowRight size={20} />
                        </button>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default FacialPage;
