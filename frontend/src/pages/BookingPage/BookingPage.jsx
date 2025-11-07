import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import "./BookingPage.css";

const BookingPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prefilledService = queryParams.get("service");

    const [formData, setFormData] = useState({
        service: prefilledService || "",
        date: "",
        time: "",
        name: "",
        email: "",
    });
    const [message, setMessage] = useState("");
    const [isAvailable, setIsAvailable] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State for the spinner

    useEffect(() => {
        if (prefilledService) {
            setFormData((prev) => ({ ...prev, service: prefilledService }));
        }
    }, [prefilledService]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (e.target.name === "date" || e.target.name === "time") {
            checkAvailability(formData.service, e.target.value, e.target.name === "date" ? formData.time : e.target.value);
        }
    };

    const checkAvailability = async (service, dateOrTime, changedField) => {
        if (service && formData.date && formData.time) {
            const date = changedField === "date" ? dateOrTime : formData.date;
            const time = changedField === "time" ? dateOrTime : formData.time;

            try {
                const response = await fetch(
                    `http://localhost:5000/api/bookings/check-availability?service=${service}&date=${date}&time=${time}`
                );
                const data = await response.json();
                setIsAvailable(data.available);
                if (!data.available) {
                    toast.error(data.message);
                }
            } catch (error) {
                console.error("Error checking availability:", error);
                toast.error("Could not check availability. Please try again.");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isAvailable === false) {
            toast.error("Selected time slot is not available. Please choose another.");
            return;
        }

        setIsLoading(true); // Show spinner when submission begins
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5000/api/bookings", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Booking Confirmed! See you soon.");
            setMessage("Booking successful!");
            setFormData({ service: prefilledService || "", date: "", time: "", name: "", email: "" }); // Reset form
        } catch (error) {
            console.error("Error making booking:", error.response || error.message);
            if (error.response?.status === 401) {
                toast.error("Your session has expired. Please log in again.");
                setMessage("Your session has expired. Please log in again.");
                localStorage.removeItem("token");
            } else {
                toast.error("Something went wrong. Please try again.");
                setMessage("Something went wrong. Please try again.");
            }
        } finally {
            setIsLoading(false); // Hide spinner after submission is complete
        }
    };

    return (
        <div className="booking-container">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">Book a Service</h1>

            {/* Show spinner during loading */}
            {isLoading && <LoadingSpinner />}

            <form className="booking-form" onSubmit={handleSubmit}>
                {/* Service Selection */}
                <div className="form-group">
                    <label htmlFor="service">Service</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a Service</option>
                        <option value="haircut">Haircut</option>
                        <option value="facial">Facial</option>
                        <option value="manicure">Manicure</option>
                        <option value="pedicure">Pedicure</option>
                    </select>
                </div>

                {/* Date Selection */}
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Time Field */}
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input
                        id="time"
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>

                {/* Name Field */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading || isAvailable === false}>
                    {isLoading ? "Submitting..." : "Book"}
                </button>
            </form>
            {message && <p className="success-message">{message}</p>}
        </div>
    );
};

export default BookingPage;