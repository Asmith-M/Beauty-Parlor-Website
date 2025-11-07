import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import facialImage from '../images/facial.jpg';

const FacialPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="service-detail">
            <h1>Facial</h1>
            <img src={facialImage} alt="Facial Service" className="service-image" />
            <p>Our rejuvenating facial is designed to cleanse, exfoliate, and nourish your skin, leaving you with a refreshed and glowing complexion.</p>
            <h2>Price</h2>
            <p>$50</p>
            <h2>Expected Time</h2>
            <p>60 minutes</p>
            <h2>Steps Involved</h2>
            <ol>
                <li>Cleansing to remove impurities and makeup.</li>
                <li>Exfoliation to remove dead skin cells.</li>
                <li>Steaming to open pores and soften the skin.</li>
                <li>Extraction of blackheads and whiteheads.</li>
                <li>Application of a face mask tailored to your skin type.</li>
                <li>Massage to improve circulation and relaxation.</li>
                <li>Application of toner and moisturizer.</li>
            </ol>
            <h2>Precautions</h2>
            <p>Please inform your esthetician of any skin sensitivities or allergies you may have.</p>

            <button onClick={() => navigate('/booking?service=facial')}>Book Now</button> {/* Add Book Now button */}
        </div>
    );
};

export default FacialPage;