import React from "react";
import './App.css';

function Navbar() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="navbar">
      <div className="title">To do list</div>
      <div className="date">{today}</div>
    </div>
  );
}

export default Navbar;


