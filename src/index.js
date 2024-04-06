import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Text from './Text';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="TextUtils"/>
    <Text title="Enter your text here"/>
  </React.StrictMode>
);
reportWebVitals();
