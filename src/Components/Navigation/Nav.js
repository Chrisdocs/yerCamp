import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            class="navbar-brand"
            href="https://codingthesmartway.com"
            target="_blank"
          ></a>
          <Link to="/" className="navbar-brand">
            yerCamp
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/checklist" className="nav-link">
                  Checklist
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/createlist" className="nav-link">
                  Create Checklist
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
      </div>
    </>
  );
}
