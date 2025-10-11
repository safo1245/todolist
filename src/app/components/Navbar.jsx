import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SH</div>
      <span className="title">Student Hub</span>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/exams">Exams</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;