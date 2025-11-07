import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import TimeSlotPicker from "../../components/TimeSlotPicker";
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
    const [isLoading, setIsLoading] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {
        if (prefilledService) {
            setFormData((prev) => ({ ...prev, service: prefilledService }));
        }
    }, [prefilledService]);

    useEffect(() => {
        if (formData.service && formData.date) {
            fetchBookedSlots();
        }
    }, [formData.service, formData.date]);

    const fetchBookedSlots = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/bookings/booked-slots?service=${formData.service}&date=${formData.date}`
            );
            setBookedSlots(response.data.bookedSlots || []);
        } catch (error) {
            console.error("Error fetching booked slots:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTimeSelect = (time) => {
        setFormData({ ...formData, time });
        checkAvailability(formData.service, formData.date, time);
    };

    const checkAvailability = async (service, date, time) => {
        if (service && date && time) {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/bookings/check-availability?service=${service}&date=${date}&time=${time}`
                );
                const data = await response.json();
                setIsAvailable(data.available);
                if (!data.available) {
                    toast.error(data.message || "This time slot is not available.");
                } else {
                    toast.success("Time slot is available!");
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

        if (!formData.time) {
            toast.error("Please select a time slot.");
            return;
        }

        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:5000/api/bookings", formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("🎉 Booking Confirmed! See you soon.");
            setMessage("Booking successful!");
            setFormData({ service: prefilledService || "", date: "", time: "", name: "", email: "" });
            setIsAvailable(null);
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
            setIsLoading(false);
        }
    };

    return (
        <div className="booking-container">
            <div className="booking-header">
                <h1 className="text-4xl font-serif font-bold text-primary mb-2">Book Your Appointment</h1>
                <p className="text-gray-600 mb-8">Choose your preferred service, date, and time</p>
            </div>

            {isLoading && <LoadingSpinner />}

            <form className="booking-form glass-card" onSubmit={handleSubmit}>
                {/* Service Selection */}
                <div className="form-group">
                    <label htmlFor="service">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Select Service
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="service-select"
                    >
                        <option value="">Choose a Service</option>
                        <option value="haircut">💇 Haircut & Styling</option>
                        <option value="facial">✨ Facial Treatment</option>
                        <option value="manicure">💅 Manicure</option>
                        <option value="pedicure">🦶 Pedicure</option>
                    </select>
                </div>

                {/* Date Selection */}
                <div className="form-group">
                    <label htmlFor="date">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Select Date
                    </label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="date-input"
                    />
                </div>

                {/* Time Slot Picker */}
                {formData.service && formData.date && (
                    <TimeSlotPicker
                        selectedTime={formData.time}
                        onTimeSelect={handleTimeSelect}
                        bookedSlots={bookedSlots}
                    />
                )}

                {/* Name Field */}
                <div className="form-group">
                    <label htmlFor="name">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email">
                        <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                    />
                </div>

                <button type="submit" disabled={isLoading || isAvailable === false} className="submit-btn">
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 mr-2 inline" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Confirm Booking
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookingPage;