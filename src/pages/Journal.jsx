import React, { useState, useEffect } from 'react';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const [gratitude, setGratitude] = useState('');
  const [gratitudes, setGratitudes] = useState([]);

  // Load previous journal & gratitude entries
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const savedGratitudes = JSON.parse(localStorage.getItem('gratitudeEntries')) || [];
    setEntries(savedEntries);
    setGratitudes(savedGratitudes);
  }, []);

  // Save journal entry
  const handleSaveEntry = () => {
    if (entry.trim() === '') return;

    const updated = [...entries, { text: entry, date: new Date().toLocaleString() }];
    setEntries(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
    setEntry('');
  };

  // Save gratitude entry
  const handleSaveGratitude = () => {
    if (gratitude.trim() === '') return;

    const updated = [...gratitudes, { text: gratitude, date: new Date().toLocaleDateString() }];
    setGratitudes(updated);
    localStorage.setItem('gratitudeEntries', JSON.stringify(updated));
    setGratitude('');
  };

  return (
    <div style={wrapper}>
      <h1 style={heading}>📓 Journal Page</h1>

      {/* Journal Entry */}
      <h3 style={subheading}>🖋 Write Your Thoughts</h3>
      <textarea
        placeholder="Write your journal entry here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        style={textarea}
      />
      <button onClick={handleSaveEntry} style={btn}>💾 Save Entry</button>

      {/* Gratitude Section */}
      <h3 style={subheading}>🌼 Gratitude of the Day</h3>
      <textarea
        placeholder="Today I’m grateful for..."
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        style={textarea}
      />
      <button onClick={handleSaveGratitude} style={btn}>🌈 Save Gratitude</button>

      {/* Display entries */}
      <div style={entryList}>
        <h3 style={entryHeading}>📝 Your Past Journal Entries</h3>
        {entries.map((e, index) => (
          <div key={index} style={entryCard}>
            <div style={entryDate}>{e.date}</div>
            <div style={entryText}>{e.text}</div>
          </div>
        ))}

        <h3 style={entryHeading}>🙏 Your Gratitudes</h3>
        {gratitudes.map((g, index) => (
          <div key={index} style={entryCard}>
            <div style={entryDate}>{g.date}</div>
            <div style={entryText}>🌻 {g.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
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
  marginBottom: '20px',
};

const subheading = {
  fontSize: '10px',
  marginBottom: '6px',
  color: '#ff66cc',
};

const textarea = {
  width: '100%',
  height: '100px',
  fontSize: '10px',
  padding: '10px',
  border: '2px solid #ff99cc',
  borderRadius: '8px',
  marginBottom: '10px',
  fontFamily: '"Press Start 2P", cursive',
  backgroundColor: '#ffe6f0',
};

const btn = {
  marginBottom: '20px',
  padding: '10px',
  fontSize: '10px',
  backgroundColor: '#ffd9ec',
  border: '2px solid #ff66cc',
  borderRadius: '6px',
  cursor: 'pointer',
};

const entryList = {
  marginTop: '1rem',
};

const entryHeading = {
  fontSize: '10px',
  color: '#ff3399',
  marginBottom: '10px',
};

const entryCard = {
  backgroundColor: '#ffe6fa',
  border: '2px dashed #ff99cc',
  padding: '10px',
  borderRadius: '8px',
  marginBottom: '10px',
};

const entryDate = {
  fontSize: '8px',
  color: '#999',
  marginBottom: '5px',
};

const entryText = {
  fontSize: '10px',
  whiteSpace: 'pre-wrap',
};
