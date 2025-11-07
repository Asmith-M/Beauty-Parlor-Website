import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import LoginComponent from './components/login/LoginComponent.jsx';
import RegisterComponent from './components/register/RegisterComponent.jsx';

// Pages
import HomePage from './pages/HomePage/HomePage.jsx';
import ServicesPage from './pages/ServicePages/ServicesPage';
import BookingPage from './pages/BookingPage/BookingPage';
import AccountPage from './pages/AccountPage/AccountPage.jsx';
import HaircutPage from './pages/ServicePages/HaircutPage';
import FacialPage from './pages/ServicePages/FacialPage';
import ManicurePage from './pages/ServicePages/ManicurePage';
import PedicurePage from './pages/ServicePages/PedicurePage';
import ProtectedRoute from './pages/ProtectedRoute';

import AdminLogin from "./pages/AdminPage/AdminLogin";
import AdminDashboard from "./pages/AdminPage/AdminDashboard.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/services/haircut" element={<HaircutPage />} />
          <Route path="/services/facial" element={<FacialPage />} />
          <Route path="/services/manicure" element={<ManicurePage />} />
          <Route path="/services/pedicure" element={<PedicurePage />} />
          <Route path="/account" element={<ProtectedRoute element={<AccountPage />} />} />
          <Route path="/booking" element={<ProtectedRoute element={<BookingPage />} />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboard />} adminOnly={true}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;