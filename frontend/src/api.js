import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Backend base URL
});

export const register = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register", { name, email, password });
    return response.data; // Returns the token on successful registration
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", { email, password });
    return response.data; // Returns the token on successful login
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchBookingStats = async (token) => {
  try {
    const response = await axiosInstance.get("/admin/stats", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch Stats Error:", error.response?.data || error.message);
    throw error;
  }
};

export const createContact = async (contactData) => {
  try {
    const response = await axiosInstance.post("/contact", contactData);
    return response.data;
  } catch (error) {
    console.error("Create Contact Error:", error.response?.data || error.message);
    throw error;
  }
};
