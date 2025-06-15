import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const musicLinks = {
  happy: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  neutral: "https://www.youtube.com/watch?v=VQH8ZTgna3Q",
  bored: "https://www.youtube.com/watch?v=KxGRhd_iWuE",
  sad: "https://www.youtube.com/watch?v=hoNb6HuNmU0",
  worst: "https://www.youtube.com/watch?v=8UVNT4wvIGY",
};

const MusicTherapy = () => {
  const { mood } = useParams();
  const navigate = useNavigate();
  const musicUrl = musicLinks[mood];

  return (
    <div style={wrapper}>
      <h2 style={heading}>🎵 Music Therapy for "{mood}" Mood</h2>
      {musicUrl ? (
        <iframe
          width="300"
          height="170"
          src={musicUrl.replace("watch?v=", "embed/")}
          title="Music"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      ) : (
        <p>No music available for this mood.</p>
      )}
      <button style={button} onClick={() => navigate("/")}>🏠 Back Home</button>
    </div>
  );
};

export default MusicTherapy;

// Styles
const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#fff0f5',
  fontFamily: '"Press Start 2P", cursive',
  textAlign: 'center',
};

const heading = {
  fontSize: '12px',
  marginBottom: '1rem',
};

const button = {
  marginTop: '20px',
  padding: '10px',
  backgroundColor: '#ffd9ec',
  border: '2px solid #ff66cc',
  borderRadius: '8px',
  fontFamily: '"Press Start 2P", cursive',
  fontSize: '10px',
  cursor: 'pointer',
};

