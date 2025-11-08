import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Calendar, Clock, User, Mail, CheckCircle, Loader } from "lucide-react";
import LoadingSpinner from "../../components/loading/loadingSpinner";
import TimeSlotPicker from "../../components/TimeSlotPicker";
import GlassCard from "../../components/GlassCard";

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

    const [isAvailable, setIsAvailable] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {
        if (prefilledService) {
            setFormData((prev) => ({ ...prev, service: prefilledService }));
        }
    }, [prefilledService]);

    const fetchBookedSlots = useCallback(async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/bookings/booked-slots?service=${formData.service}&date=${formData.date}`
            );
            setBookedSlots(response.data.bookedSlots || []);
        } catch (error) {
            console.error("Error fetching booked slots:", error);
        }
    }, [formData.service, formData.date]);

    useEffect(() => {
        if (formData.service && formData.date) {
            fetchBookedSlots();
        }
    }, [formData.service, formData.date, fetchBookedSlots]);

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
            setFormData({ service: prefilledService || "", date: "", time: "", name: "", email: "" });
            setIsAvailable(null);
        } catch (error) {
            console.error("Error making booking:", error.response || error.message);
            if (error.response?.status === 401) {
                toast.error("Your session has expired. Please log in again.");
                localStorage.removeItem("token");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-bg via-bg-secondary to-bg py-16 px-5">
            <div className="max-w-4xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 fade-in">
                    <Calendar className="mx-auto mb-6 text-primary" size={64} />
                    <h1 className="text-5xl font-serif font-bold text-primary mb-6">Book Your Appointment</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose your preferred service, date, and time to secure your spot with our expert stylists.
                    </p>
                </div>

                {isLoading && <LoadingSpinner />}

        <GlassCard className="p-8">
            <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Service Selection */}
                        <div className="space-y-3">
                            <label htmlFor="service" className="flex items-center space-x-2 text-lg font-semibold text-primary">
                                <CheckCircle size={20} />
                                <span>Select Service</span>
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                            >
                                <option value="">Choose a Service</option>
                                <option value="haircut">💇 Haircut & Styling</option>
                                <option value="facial">✨ Facial Treatment</option>
                                <option value="manicure">💅 Manicure</option>
                                <option value="pedicure">🦶 Pedicure</option>
                            </select>
                        </div>

                        {/* Date Selection */}
                        <div className="space-y-3">
                            <label htmlFor="date" className="flex items-center space-x-2 text-lg font-semibold text-primary">
                                <Calendar size={20} />
                                <span>Select Date</span>
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                            />
                        </div>

                        {/* Time Slot Picker */}
                        {formData.service && formData.date && (
                            <div className="space-y-3">
                                <label className="flex items-center space-x-2 text-lg font-semibold text-primary">
                                    <Clock size={20} />
                                    <span>Select Time Slot</span>
                                </label>
                                <TimeSlotPicker
                                    selectedTime={formData.time}
                                    onTimeSelect={handleTimeSelect}
                                    bookedSlots={bookedSlots}
                                />
                            </div>
                        )}

                        {/* Name Field */}
                        <div className="space-y-3">
                            <label htmlFor="name" className="flex items-center space-x-2 text-lg font-semibold text-primary">
                                <User size={20} />
                                <span>Your Name</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-3">
                            <label htmlFor="email" className="flex items-center space-x-2 text-lg font-semibold text-primary">
                                <Mail size={20} />
                                <span>Email Address</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                required
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || isAvailable === false}
                            className="w-full bg-gradient-to-r from-primary to-primary-light text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader className="animate-spin" size={20} />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    <CheckCircle size={20} />
                                    <span>Confirm Booking</span>
                                </>
                            )}
                        </button>
                    </form>
                </GlassCard>
            </div>
        </div>
    );
};

export default BookingPage;