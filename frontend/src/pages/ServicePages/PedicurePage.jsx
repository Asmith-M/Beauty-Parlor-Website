import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, Footprints, Calendar, ArrowRight } from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import pedicureImage from '../images/pedicure.jpg';

const PedicurePage = () => {
    const navigate = useNavigate();

    const steps = [
        'Soaking feet in warm water to soften skin',
        'Exfoliating to remove dead skin cells',
        'Trimming and shaping toenails',
        'Cuticle care and callus removal',
        'Applying lotion and massaging feet and lower legs',
        'Polishing toenails with your choice of color'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg py-16 px-5">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 fade-in">
                    <Footprints className="mx-auto mb-6 text-primary" size={64} />
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Luxury Pedicure Service</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Treat your feet to our comprehensive pedicure service that includes foot soaking, exfoliation, nail care, and a relaxing massage.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Image Section */}
                    <div className="fade-in">
                        <GlassCard className="overflow-hidden">
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={pedicureImage}
                                    alt="Pedicure Service"
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
                                Our comprehensive pedicure service includes foot soaking, exfoliation, nail care, and a relaxing massage to keep your feet healthy and beautiful.
                            </p>

                            {/* Price & Time */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center space-x-3">
                                    <DollarSign className="text-secondary" size={24} />
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-2xl font-bold text-primary">$40</p>
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
                                Please inform your pedicurist of any foot conditions or sensitivities you may have to ensure a safe and comfortable experience.
                            </p>
                        </GlassCard>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <GlassCard className="p-8 bg-gradient-to-r from-primary to-primary-light text-white">
                        <h2 className="text-3xl font-serif font-bold mb-4">Pamper Your Feet Today!</h2>
                        <p className="text-lg mb-8 opacity-90">Book your pedicure and enjoy perfectly polished toes!</p>
                        <button
                            onClick={() => navigate('/booking?service=pedicure')}
                            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Calendar size={20} />
                            <span>Book Your Pedicure</span>
                            <ArrowRight size={20} />
                        </button>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default PedicurePage;
