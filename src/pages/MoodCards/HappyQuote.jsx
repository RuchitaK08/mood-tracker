import React from 'react';
import { useNavigate } from 'react-router-dom';

const HappyQuote = () => {
  const navigate = useNavigate();

  return (
    <div style={wrapper}>
      <div style={card}>
        <h2 style={heading}>❤️ You're glowing today!</h2>
        <p style={quote}>"Happiness is a direction, not a place."</p>
        <img src="/happy.jpg" alt="Happy Cartoon" style={{ width: '200px', marginBottom: '20px' }} />

        <button style={musicButton} onClick={() => navigate('/music-therapy/happy')}>
          🎵 Music Therapy
        </button>
        <button style={homeButton} onClick={() => navigate('/')}>
          🏠 Back Home
        </button>
      </div>
    </div>
  );
};

export default HappyQuote;

// Styles
const wrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff0f5',
  height: '100vh',
};

const card = {
  backgroundColor: '#ffe6f7',
  border: '4px solid #ff99cc',
  borderRadius: '20px',
  padding: '2rem',
  textAlign: 'center',
  width: '300px',
  boxShadow: '0 0 20px #ffa5d8',
  fontFamily: '"Press Start 2P", cursive',
};

const heading = {
  fontSize: '16px',
  marginBottom: '10px',
};

const quote = {
  fontSize: '12px',
  marginBottom: '15px',
};

const imgStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'contain',
  marginBottom: '20px',
};

const musicButton = {
  backgroundColor: '#ffccf9',
  border: '2px solid #ff66cc',
  padding: '10px',
  fontSize: '12px',
  fontFamily: '"Press Start 2P", cursive',
  cursor: 'pointer',
  marginBottom: '10px',
  borderRadius: '8px',
};

const homeButton = {
  ...musicButton,
  backgroundColor: '#ffd9ec',
  border: '2px solid #ff66a3',
};
