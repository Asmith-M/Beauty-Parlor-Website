import React from 'react';
import { useNavigate } from 'react-router-dom';
import manicureImage from '../images/manicure.jpg';

const ManicurePage = () => {
    const navigate = useNavigate();

    return (
        <div className="service-detail">
            <h1>Manicure</h1>
            <img src={manicureImage} alt="Manicure Service" className="service-image" />
            <p>Our relaxing manicure service includes nail shaping, cuticle care, and polish application to keep your nails looking their best.</p>
            <h2>Price</h2>
            <p>$25</p>
            <h2>Expected Time</h2>
            <p>45 minutes</p>
            <h2>Steps Involved</h2>
            <ol>
                <li>Soaking nails to soften cuticles.</li>
                <li>Pushing back and trimming cuticles.</li>
                <li>Shaping and buffing nails.</li>
                <li>Applying base coat, polish, and top coat.</li>
                <li>Massaging hands with lotion.</li>
            </ol>
            <h2>Precautions</h2>
            <p>Please inform your nail technician if you have any nail or skin conditions.</p>
            <button onClick={() => navigate('/booking?service=manicure')}>Book Now</button>
        </div>
    );
};

export default ManicurePage;