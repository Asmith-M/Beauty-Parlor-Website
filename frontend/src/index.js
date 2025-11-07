import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './styles.css';


// Create a root using createRoot
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the App component using the new root.render method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
