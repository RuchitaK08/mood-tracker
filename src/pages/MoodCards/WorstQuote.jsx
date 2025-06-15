import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorstQuote = () => {
  const navigate = useNavigate();
  return (
    <div style={wrapper}>
      <div style={card}>
        <h2>🖤 Snoopy’s got your back</h2>
        <p>"Even the darkest night will end and the sun will rise."</p>
        <img src="/worst.jpg" alt="worst" style={imgStyle} />
        <Buttons mood="worst" navigate={navigate} />
      </div>
    </div>
  );
};

export default WorstQuote;
const wrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#fff0f5',
};

const card = {
  backgroundColor: '#ffe6f7',
  border: '4px solid #ff99cc',
  borderRadius: '20px',
  padding: '2rem',
  textAlign: 'center',
  width: '320px',
  boxShadow: '0 0 20px #ffa5d8',
  fontFamily: '"Press Start 2P", cursive',
  color: '#333',
};

const imgStyle = {
  width: '140px',
  height: '140px',
  objectFit: 'contain',
  margin: '20px auto',
};

const buttonStyle = {
  backgroundColor: '#ffccf9',
  border: '2px solid #ff66cc',
  padding: '12px 10px',
  fontSize: '10px',
  fontFamily: '"Press Start 2P", cursive',
  cursor: 'pointer',
  borderRadius: '8px',
  margin: '8px',
  width: '80%',
};

const Buttons = ({ navigate, mood }) => (
  <>
    <button style={buttonStyle} onClick={() => navigate(`/music-therapy/${mood}`)}>
      🎵 Music Therapy
    </button>
    <br />
    <button
      style={{ ...buttonStyle, backgroundColor: '#ffd9ec', border: '2px solid #ff66a3' }}
      onClick={() => navigate('/')}
    >
      🏠 Back Home
    </button>
  </>
);


