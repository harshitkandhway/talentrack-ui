// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css'; // Adjust the path based on your project structure

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Job Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/post-job" className="dashboard-link">Post a Job</Link>
                <Link to="/search-job" className="dashboard-link">Search a Job</Link>
            </div>
        </div>
    );
}

export default Dashboard;
