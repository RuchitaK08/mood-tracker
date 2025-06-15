import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoodQuote.css';

const MoodQuote = () => {
  const navigate = useNavigate();

  const moods = [
    { label: 'Happy', emoji: '❤️', path: '/mood-tracker/happy' },
    { label: 'Neutral', emoji: '🐙', path: '/mood-tracker/neutral' },
    { label: 'Bored', emoji: '🐷', path: '/mood-tracker/bored' },
    { label: 'Sad', emoji: '😢', path: '/mood-tracker/sad' },
    { label: 'Worst', emoji: '🛌', path: '/mood-tracker/worst' },
  ];

  return (
    <div className="mood-select-container">
      <h1>Select Your Mood 💭</h1>
      <div className="mood-buttons">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className="mood-button"
            onClick={() => navigate(mood.path)}
          >
            <span className="emoji">{mood.emoji}</span>
            <span className="label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodQuote;





