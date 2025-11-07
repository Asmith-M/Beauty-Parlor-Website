import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ServicePage.css';
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
            price: '$30',
            time: '45 minutes',
            imageUrl: haircutImage,
            link: '/services/haircut',
        },
        {
            id: 2,
            name: 'Facial',
            description: 'A rejuvenating facial to cleanse, exfoliate, and nourish your skin.',
            price: '$50',
            time: '60 minutes',
            imageUrl: facialImage,
            link: '/services/facial',
        },
        {
            id: 3,
            name: 'Manicure',
            description: 'A relaxing manicure to keep your nails looking their best.',
            price: '$25',
            time: '45 minutes',
            imageUrl: manicureImage,
            link: '/services/manicure',
        },
        {
            id: 4,
            name: 'Pedicure',
            description: 'A comprehensive pedicure to pamper your feet and keep them healthy.',
            price: '$40',
            time: '60 minutes',
            imageUrl: pedicureImage,
            link: '/services/pedicure',
        },
    ];

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.imageUrl} alt={service.name} className="service-image" />
                        <div className="service-info">
                            <h2>{service.name}</h2>
                            <p>{service.description}</p>
                            <p>Price: {service.price}</p>
                            <p>Expected Time: {service.time}</p>
                            <Link to={service.link} className="service-link">Learn More</Link>
                            <button onClick={() => navigate(`/booking?service=${service.name}`)}>
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;