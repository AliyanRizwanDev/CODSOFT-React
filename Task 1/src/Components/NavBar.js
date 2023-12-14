import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Task Tracker</Link>
        <center>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/AddTasks">Add Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ChangeTasks">Change Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ViewTasks">View Tasks</Link>
            </li>
          </ul>
        </div>
      </center>
      </div>
    </nav>
  );
}
