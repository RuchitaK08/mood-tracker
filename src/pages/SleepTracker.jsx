import React, { useState, useEffect } from 'react';

const SleepTracker = () => {
  const [sleepTime, setSleepTime] = useState('');
  const [wakeTime, setWakeTime] = useState('');
  const [hoursSlept, setHoursSlept] = useState(null);
  const [sleepLog, setSleepLog] = useState([]);

  useEffect(() => {
    const savedLog = JSON.parse(localStorage.getItem('sleepLog')) || [];
    setSleepLog(savedLog);
  }, []);

  const calculateSleep = () => {
    if (!sleepTime || !wakeTime) return;

    const sleep = new Date(`1970-01-01T${sleepTime}:00`);
    const wake = new Date(`1970-01-01T${wakeTime}:00`);

    let diff = (wake - sleep) / 1000 / 60 / 60;
    if (diff < 0) diff += 24;

    const hours = diff.toFixed(1);
    setHoursSlept(hours);

    const today = new Date().toLocaleDateString();
    const newEntry = {
      date: today,
      sleepTime,
      wakeTime,
      hours,
    };

    const updatedLog = [...sleepLog, newEntry];
    setSleepLog(updatedLog);
    localStorage.setItem('sleepLog', JSON.stringify(updatedLog));
  };

  return (
    <div style={wrapper}>
      <h1 style={heading}>🌙 Sleep Tracker</h1>

      <div style={form}>
        <label style={label}>🛌 Sleep Time</label>
        <input type="time" value={sleepTime} onChange={(e) => setSleepTime(e.target.value)} style={input} />

        <label style={label}>☀️ Wake Time</label>
        <input type="time" value={wakeTime} onChange={(e) => setWakeTime(e.target.value)} style={input} />

        <button onClick={calculateSleep} style={btn}>⏱️ Calculate & Save</button>
      </div>

      {hoursSlept && (
        <div style={resultCard}>
          <p style={resultText}>😴 You slept for <b>{hoursSlept} hours</b></p>
          {hoursSlept >= 8
            ? <p style={quote}>🌟 Well-rested queen! ✨</p>
            : <p style={quote}>🌸 More sleep = more sparkle 😌</p>
          }
        </div>
      )}

      <div style={logSection}>
        <h3 style={logTitle}>📅 Your Sleep Log</h3>
        {sleepLog.length === 0 ? (
          <p style={noLog}>No entries yet... start logging today! 💕</p>
        ) : (
          sleepLog.map((entry, index) => (
            <div key={index} style={logCard}>
              <p style={logDate}>📆 {entry.date}</p>
              <p style={logText}>🛏️ Slept at: <b>{entry.sleepTime}</b></p>
              <p style={logText}>🌅 Woke up at: <b>{entry.wakeTime}</b></p>
              <p style={logText}>💤 Hours slept: <b>{entry.hours}</b></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SleepTracker;
const wrapper = {
  backgroundColor: '#fff0f5',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: '"Press Start 2P", cursive',
};

const heading = {
  textAlign: 'center',
  fontSize: '14px',
  color: '#ff3399',
  marginBottom: '30px',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  margin: '0 auto',
  gap: '10px',
};

const label = {
  fontSize: '10px',
  color: '#ff66cc',
};

const input = {
  padding: '8px',
  fontSize: '10px',
  border: '2px solid #ff99cc',
  borderRadius: '6px',
  backgroundColor: '#ffe6f0',
  fontFamily: '"Press Start 2P", cursive',
};

const btn = {
  padding: '10px',
  fontSize: '10px',
  backgroundColor: '#ffd9ec',
  border: '2px solid #ff66cc',
  borderRadius: '6px',
  cursor: 'pointer',
};

const resultCard = {
  backgroundColor: '#ffe6fa',
  border: '2px dashed #ff99cc',
  padding: '10px',
  marginTop: '30px',
  borderRadius: '10px',
  maxWidth: '300px',
  margin: '30px auto 0',
};

const resultText = {
  fontSize: '10px',
  textAlign: 'center',
};

const quote = {
  fontSize: '9px',
  textAlign: 'center',
  color: '#cc3399',
  marginTop: '5px',
};

const logSection = {
  marginTop: '40px',
  maxWidth: '320px',
  margin: '40px auto 0',
};

const logTitle = {
  fontSize: '10px',
  color: '#ff3399',
  marginBottom: '10px',
};

const logCard = {
  backgroundColor: '#ffe6f8',
  padding: '10px',
  borderRadius: '8px',
  marginBottom: '10px',
  border: '2px dashed #ff99cc',
};

const logText = {
  fontSize: '9px',
  marginBottom: '4px',
};

const logDate = {
  fontSize: '9px',
  fontWeight: 'bold',
  color: '#cc3399',
  marginBottom: '4px',
};

const noLog = {
  fontSize: '9px',
  color: '#777',
};
