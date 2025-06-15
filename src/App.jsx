import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import MoodQuote from './pages/MoodQuote';
import SleepTracker from './pages/SleepTracker';
import ToDo from './pages/ToDo';
import Journal from './pages/Journal';
import MusicTherapy from './pages/MusicTherapy';

// Mood Quote Cards
import HappyQuote from './pages/MoodCards/HappyQuote';
import NeutralQuote from './pages/MoodCards/NeutralQuote';
import BoredQuote from './pages/MoodCards/BoredQuote';
import SadQuote from './pages/MoodCards/SadQuote';
import WorstQuote from './pages/MoodCards/WorstQuote';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Mood Tracker */}
        <Route path="/mood-tracker" element={<MoodQuote />} />
        <Route path="/mood-tracker/happy" element={<HappyQuote />} />
        <Route path="/mood-tracker/neutral" element={<NeutralQuote />} />
        <Route path="/mood-tracker/bored" element={<BoredQuote />} />
        <Route path="/mood-tracker/sad" element={<SadQuote />} />
        <Route path="/mood-tracker/worst" element={<WorstQuote />} />

        {/* Music Therapy */}
        <Route path="/music-therapy/:mood" element={<MusicTherapy />} />

        {/* To-Do List */}
        <Route path="/to-do" element={<ToDo />} />

        {/* Journal */}
        <Route path="/journal" element={<Journal />} />

        {/* Sleep Tracker */}
        <Route path="/sleep-tracker" element={<SleepTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
