import React from 'react';
import './MoodCard.css';

function MoodCard({ emoji, label, selected, onClick }) {
  return (
    <div
      className={`mood-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="emoji">{emoji}</span>
      <span className="label">{label}</span>
    </div>
  );
}

export default MoodCard;
