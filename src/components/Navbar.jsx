// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/mood" style={{ margin: "10px" }}>Mood Tracker</Link>
      <Link to="/sleep" style={{ margin: "10px" }}>Sleep Tracker</Link>
      <Link to="/todo" style={{ margin: "10px" }}>To-Do</Link>
      <Link to="/journal" style={{ margin: "10px" }}>Journal</Link>
      <Link to="/gratitude" style={{ margin: "10px" }}>Gratitude</Link>
      <Link to="/music" style={{ margin: "10px" }}>Music Therapy</Link>
    </nav>
  );
}

export default Navbar;
