import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/Restaurants';
import axios from 'axios';

axios.defaults.baseURL = "https://yelp-backend.netlify.app/.netlify/functions"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);


