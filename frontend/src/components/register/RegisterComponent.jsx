import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            setError('');
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error.response?.data?.msg || 'Server error');
            setError(error.response?.data?.msg || 'Something went wrong!');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-bg to-bg-secondary p-5">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl min-h-[550px] bg-white rounded-2xl shadow-lg flex overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <div className="hidden md:flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-primary to-primary-light w-2/5 p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient opacity-50 animate-pulse"></div>
                    <div className="relative z-10">
                        <p className="font-serif text-3xl font-semibold mb-6">Create an Account</p>
                        <p className="text-lg mb-4">Already have an account?</p>
                        <button
                            type="button"
                            onClick={() => navigate('/login')}
                            className="bg-white/20 text-white border-2 border-white/40 px-8 py-3 rounded-full font-bold text-base transition-all duration-200 ease-in-out backdrop-blur-sm hover:bg-white/30 hover:border-white/60 transform hover:-translate-y-0.5"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-3/5 p-12 flex flex-col justify-center">
                    <h1 className="font-serif text-4xl font-bold text-primary mb-8">Register</h1>
                    {error && <p className="text-red-600 bg-red-100 border border-red-200 px-4 py-3 rounded-lg mb-6 text-center text-sm">{error}</p>}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 my-2 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-accent focus:shadow-sm"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 my-2 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-accent focus:shadow-sm"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 my-2 border-2 border-gray-200 rounded-lg text-base transition-all duration-200 ease-in-out focus:outline-none focus:border-accent focus:shadow-sm"
                    />
                    <button type="submit" className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-3 rounded-lg font-bold text-base mt-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Register</button>
                    <p className="mt-6 text-center text-gray-500 text-sm">or register with social platforms</p>
                    <div className="flex justify-center gap-4 mt-5">
                        <button type="button" className="flex items-center justify-center border-2 border-gray-200 p-3 rounded-lg w-12 h-12 bg-white transition-all duration-200 ease-in-out hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
                            <img src="/google-icon.png" alt="Google" className="w-6 h-6 object-contain" />
                        </button>
                        <button type="button" className="flex items-center justify-center border-2 border-gray-200 p-3 rounded-lg w-12 h-12 bg-white transition-all duration-200 ease-in-out hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
                            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6 object-contain" />
                        </button>
                        <button type="button" className="flex items-center justify-center border-2 border-gray-200 p-3 rounded-lg w-12 h-12 bg-white transition-all duration-200 ease-in-out hover:border-accent hover:-translate-y-0.5 hover:shadow-md">
                            <img src="/microsoft-icon.png" alt="Microsoft" className="w-6 h-6 object-contain" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;