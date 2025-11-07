import React from 'react';
import { useNavigate } from 'react-router-dom';
import haircutImage from '../images/haircut.jpg';

const HaircutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="service-detail">
            <h1>Haircut</h1>
            <img src={haircutImage} alt="Haircut Service" className="service-image" />
            <p>Our professional haircut service is tailored to your style and preferences. Our experienced stylists will ensure you leave with a look you love.</p>
            <h2>Price</h2>
            <p>$30</p>
            <h2>Expected Time</h2>
            <p>45 minutes</p>
            <h2>Steps Involved</h2>
            <ol>
                <li>Consultation to understand your preferences.</li>
                <li>Washing and conditioning your hair.</li>
                <li>Cutting and styling your hair as desired.</li>
                <li>Final touches and styling tips.</li>
            </ol>
            <h2>Precautions</h2>
            <p>Please inform your stylist of any allergies or sensitivities you may have.</p>
            <button onClick={() => navigate('/booking?service=haircut')}>Book Now</button>
        </div>
    );
};

export default HaircutPage;