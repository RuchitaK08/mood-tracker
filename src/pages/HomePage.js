import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { FaBed, FaSmile, FaClipboardList, FaBook } from 'react-icons/fa';
import MoodAgent from '../agents/MoodAgent';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h2>GOOD MORNING LUCY!</h2>
      <p>hope you are having a great day</p>

      <div className="card-container">
        <div className="card" onClick={() => navigate('/sleep-tracker')}>
          <FaBed className="icon" />
          <span>sleep tracker</span>
        </div>

        <div className="card" onClick={() => navigate('/mood-tracker')}>
          <FaSmile className="icon" />
          <span>mood tracker</span>
        </div>

        <div className="card" onClick={() => navigate('/to-do')}>
          <FaClipboardList className="icon" />
          <span>to do list</span>
        </div>

        <div className="card" onClick={() => navigate('/journal')}>
          <FaBook className="icon" />
          <span>journal</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
