import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="navbar">
        <div className="toolbar">
          <h2 className="title"> Food Hacks </h2>
          <div className="user-info"></div>
        </div>
      </header>
    </div>
  );
}
