import React from "react";
import './App.css';

function Navbar() {
  const today = new Date().toLocaleDateString();

  // Navbar
  return (
    <div className="navbar">
      <div className="title">To do list</div>
      {/* 오늘 날짜 */}
      <div className="date">{today}</div>
    </div>
  );
}

export default Navbar;


