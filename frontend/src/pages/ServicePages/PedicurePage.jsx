import React from 'react';
import { useNavigate } from 'react-router-dom';
import pedicureImage from '../images/pedicure.jpg';

const PedicurePage = () => {
    const navigate = useNavigate();

    return (
        <div className="service-detail">
            <h1>Pedicure</h1>
            <img src={pedicureImage} alt="Pedicure Service" className="service-image" />
            <p>Our comprehensive pedicure service includes foot soaking, exfoliation, nail care, and a relaxing massage to keep your feet healthy and beautiful.</p>
            <h2>Price</h2>
            <p>$40</p>
            <h2>Expected Time</h2>
            <p>60 minutes</p>
            <h2>Steps Involved</h2>
            <ol>
                <li>Soaking feet in warm water to soften skin.</li>
                <li>Exfoliating to remove dead skin cells.</li>
                <li>Trimming and shaping toenails.</li>
                <li>Cuticle care and callus removal.</li>
                <li>Applying lotion and massaging feet and lower legs.</li>
                <li>Polishing toenails with your choice of color.</li>
            </ol>
            <h2>Precautions</h2>
            <p>Please inform your pedicurist of any foot conditions or sensitivities you may have.</p>
            <button onClick={() => navigate('/booking?service=pedicure')}>Book Now</button>
        </div>
    );
};

export default PedicurePage;