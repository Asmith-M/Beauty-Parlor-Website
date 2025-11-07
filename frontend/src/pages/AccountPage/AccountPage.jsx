import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountPage = () => {
    const [user, setUser] = useState({});
    const [bookingHistory, setBookingHistory] = useState({ current: [], previous: [] });
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:5000/api/user/account", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data.user);
            } catch (err) {
                console.error("Error fetching user details:", err);
                setError("Failed to load user details.");
            }
        };

        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:5000/api/user/booking-history", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBookingHistory(response.data);
            } catch (err) {
                console.error("Error fetching booking history:", err);
                setError("Failed to load booking history.");
            }
        };

        fetchUserDetails();
        fetchBookings();
    }, []);

    return (
        <div className="min-h-screen p-5 md:p-10 bg-gradient-to-r from-bg to-bg-secondary">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl text-primary mb-2 text-center">Welcome, {user.name}</h1>
                <p className="text-center text-gray-500 text-lg mb-12">Email: {user.email}</p>

                <h2 className="font-serif text-3xl md:text-4xl text-primary my-10 text-center">Your Bookings</h2>

                <div>
                    <h3 className="text-2xl text-secondary font-semibold mb-5">Current Bookings</h3>
                    {bookingHistory.current.length > 0 ? (
                        bookingHistory.current.map((booking) => (
                            <div key={booking._id} className="bg-white p-6 mb-4 rounded-lg border-l-4 border-secondary shadow-md transition-transform duration-200 ease-in-out hover:translate-x-1 hover:shadow-lg">
                                <p className="text-lg font-semibold">{booking.service}</p>
                                <p className="text-gray-600">{new Date(booking.date).toLocaleDateString()}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No current bookings.</p>
                    )}
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl text-secondary font-semibold mb-5">Previous Bookings</h3>
                    {bookingHistory.previous.length > 0 ? (
                        bookingHistory.previous.map((booking) => (
                            <div key={booking._id} className="bg-white p-6 mb-4 rounded-lg border-l-4 border-gray-300 shadow-sm transition-transform duration-200 ease-in-out hover:translate-x-1 hover:shadow-md">
                                <p className="text-lg font-semibold">{booking.service}</p>
                                <p className="text-gray-600">{new Date(booking.date).toLocaleDateString()}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No previous bookings.</p>
                    )}
                </div>

                {error && <p className="text-red-500 bg-red-100 p-4 rounded-lg mt-8 max-w-4xl mx-auto border border-red-200 text-center">{error}</p>}
            </div>
        </div>
    );
};

export default AccountPage;