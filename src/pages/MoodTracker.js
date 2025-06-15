import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoodTracker.css';

const MoodTracker = () => {
  const navigate = useNavigate();

  return (
    <div className="mood-tracker-container">
      <button className="back-button">back</button>
      <h2>How do we feel today?</h2>
      <div className="mood-options">
        <button onClick={() => navigate('/happy')}>happy</button>
        <button onClick={() => navigate('/neutral')}>neutral</button>
        <button onClick={() => navigate('/bored')}>bored</button>
        <button onClick={() => navigate('/sad')}>sad</button>
        <button onClick={() => navigate('/worst')}>worst</button>
      </div>
    </div>
  );
};

export default MoodTracker;
