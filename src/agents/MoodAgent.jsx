import React, { useEffect, useState } from 'react';

const MoodAgent = () => {
  const [showSupport, setShowSupport] = useState(false);

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem('moodLog')) || [];

    // Step 1: Group mood by date (latest per day)
    const dayWise = {};
    logs.reverse().forEach(log => {
      if (!dayWise[log.date]) {
        dayWise[log.date] = log.mood;
      }
    });

    // Step 2: Get latest 3 days' moods
    const last3Days = Object.keys(dayWise).slice(0, 3);

    const allSadOrWorst = last3Days.every(
      date => dayWise[date] === 'sad' || dayWise[date] === 'worst'
    );

    if (last3Days.length === 3 && allSadOrWorst) {
      setShowSupport(true);
    }
  }, []);

  if (!showSupport) return null;

  return (
    <div style={popup}>
      <p>💬 You've been feeling low for the past 3 days. We're here for you 🤍</p>
      <a href="/music-therapy/sad" style={btn}>🎵 Try Music Therapy</a>
      <a href="/journal" style={btn}>📝 Write in Your Journal</a>
      <a href="https://www.therapyroute.com/" target="_blank" rel="noreferrer" style={btn}>🧠 Talk to a Therapist</a>
    </div>
  );
};

export default MoodAgent;

const popup = {
  background: '#ffe6f0',
  padding: '20px',
  border: '2px solid #ff66cc',
  borderRadius: '10px',
  fontFamily: '"Press Start 2P", cursive',
  fontSize: '10px',
  margin: '20px',
  textAlign: 'center',
};

const btn = {
  display: 'inline-block',
  margin: '10px',
  padding: '8px 12px',
  background: '#ff99cc',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
};
