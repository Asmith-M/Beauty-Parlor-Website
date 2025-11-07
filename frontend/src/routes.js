import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
    </Routes>
  </Router>
);

export default AppRoutes;
