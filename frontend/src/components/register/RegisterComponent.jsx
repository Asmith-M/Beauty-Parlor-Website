import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Mail, Lock, User, UserPlus, LogIn, Eye, EyeOff } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            toast.success('🎉 Registration successful! Please login.');
            setError('');
            navigate('/login');
        } catch (error) {
            console.error('Error registering:', error.response?.data?.msg || 'Server error');
            const errorMsg = error.response?.data?.msg || 'Something went wrong!';
            toast.error(errorMsg);
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 p-5 py-20">
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Branding */}
                    <div className="md:w-2/5 bg-gradient-to-br from-secondary via-secondary-dark to-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="mb-8">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                                    <UserPlus size={40} />
                                </div>
                                <h2 className="font-serif text-4xl font-bold mb-4">Join Us Today!</h2>
                                <p className="text-lg text-gray-100 mb-8">Create an account and start your journey to beauty and wellness.</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-200">Already have an account?</p>
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:scale-105"
                                >
                                    <LogIn size={20} />
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-3/5 p-12">
                        <h1 className="font-serif text-4xl font-bold text-primary mb-2">Create Account</h1>
                        <p className="text-gray-600 mb-8">Fill in your details to get started</p>
                        
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
                                <p className="text-red-700 text-sm">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all duration-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl text-base transition-all duration-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                        className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl text-base transition-all duration-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-secondary transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-secondary to-secondary-dark text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Creating account...
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={20} />
                                        Create Account
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-sm mb-4">Or register with</p>
                            <div className="flex justify-center gap-4">
                                <button 
                                    type="button" 
                                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-secondary hover:bg-secondary/5 transition-all duration-200 hover:scale-110"
                                >
                                    <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
                                </button>
                                <button 
                                    type="button" 
                                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-secondary hover:bg-secondary/5 transition-all duration-200 hover:scale-110"
                                >
                                    <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                                </button>
                                <button 
                                    type="button" 
                                    className="p-3 border-2 border-gray-200 rounded-xl hover:border-secondary hover:bg-secondary/5 transition-all duration-200 hover:scale-110"
                                >
                                    <img src="/microsoft-icon.png" alt="Microsoft" className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;