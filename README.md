# Beauty Parlour Website

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.13.1-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-5.1.0-black.svg)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-blue.svg)](https://tailwindcss.com/)

A modern, full-stack web application for a beauty parlour, built with React for the frontend and Node.js/Express for the backend. The app allows users to browse services, book appointments, manage accounts, and includes an admin dashboard for managing bookings.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Features
- **User Authentication**: Secure login and registration with JWT tokens
- **Service Browsing**: View detailed information about beauty services (Haircut, Facial, Manicure, Pedicure)
- **Appointment Booking**: Easy-to-use booking system with availability checking
- **Account Management**: View and manage personal bookings
- **Contact Form**: Send messages directly to the parlour
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

### Admin Features
- **Admin Dashboard**: Comprehensive dashboard for managing bookings
- **Booking Statistics**: View total, completed, and upcoming bookings
- **Booking Management**: Filter and sort bookings by various criteria
- **Secure Admin Access**: Protected admin routes with separate authentication

### Additional Features
- **Real-time Availability**: Check slot availability before booking
- **Toast Notifications**: User-friendly feedback with React Toastify
- **Loading States**: Smooth user experience with loading spinners
- **Error Handling**: Robust error handling and user feedback
- **Security**: Rate limiting, CORS, Helmet for security headers, and password hashing

## Tech Stack

### Frontend
- **React 19.1.0**: Modern JavaScript library for building user interfaces
- **React Router DOM**: Declarative routing for React
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications
- **Moment.js**: Date manipulation library
- **React Big Calendar**: Calendar component for potential future features

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express 5.1.0**: Web application framework for Node.js
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-Origin Resource Sharing
- **Helmet**: Security middleware
- **express-rate-limit**: Rate limiting middleware

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git** for version control

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/beauty-parlour-website.git
   cd beauty-parlour-website
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

## Environment Setup

1. **Backend Environment Variables:**
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/beauty-parlour
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   ```

2. **MongoDB Setup:**
   - For local MongoDB: Ensure MongoDB is running on your system
   - For MongoDB Atlas: Update `MONGODB_URI` with your Atlas connection string

## Usage

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Application:**
   Open a new terminal window:
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on `http://localhost:3000`

3. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3000`
   - Register a new account or login with existing credentials
   - Browse services and book appointments
   - Admin access: Navigate to `/admin/login` for admin dashboard

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/check-availability` - Check slot availability
- `GET /api/user/bookings` - Get user's bookings

### Admin
- `GET /api/admin/bookings` - Get all bookings (admin only)
- `GET /api/admin/stats` - Get booking statistics (admin only)

### Contact
- `POST /api/contact` - Send contact message

## Project Structure

```
beauty-parlour-website/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── userController.js
│   │   ├── adminController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── authAdmin.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Booking.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── adminRoutes.js
│   │   └── contactRoutes.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── footer/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── loading/
│   │   ├── pages/
│   │   │   ├── HomePage/
│   │   │   ├── ServicePages/
│   │   │   ├── BookingPage/
│   │   │   ├── AccountPage/
│   │   │   ├── AdminPage/
│   │   │   └── GalleryPage.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── routes.js
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── mongodb-data.ja.js
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please ensure your code follows the existing code style and includes appropriate tests.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Note:** This is a demo project for educational purposes. For production use, ensure proper security measures, database backups, and scalability considerations.
