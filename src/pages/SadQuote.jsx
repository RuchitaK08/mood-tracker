import React from 'react';
import { useNavigate } from 'react-router-dom';

const HappyQuote = () => {
  const navigate = useNavigate();

  return (
    <div className="quote-card">
      <button className="back-button" onClick={() => navigate(-1)}>back</button>
      <div className="card-content">
        <img src="https://i.imgur.com/JRzDOP5.png" alt="Heart" />
        <p>happy to hear that you are having a great day!</p>
      </div>
    </div>
  );
};

export default HappyQuote;
