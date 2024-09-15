// src/components/SearchJob.js
import React, { useState } from 'react';
import './styles/SearchJob.css'; // Adjust the path based on your project structure

function SearchJob() {
    const [searchParams, setSearchParams] = useState({
        searchTerm: '',
        place: '',
        experienceRange: '',
        salaryRange: ''
    });

    const handleChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchParams); // Handle search logic here
    };

    return (
        <div className="search-job-form">
            <h1>Search for a Job</h1>
            <form onSubmit={handleSearch}>
                <input type="text" name="searchTerm" placeholder="Search..." onChange={handleChange} />
                <input type="text" name="place" placeholder="Place" onChange={handleChange} />
                <input type="text" name="experienceRange" placeholder="Experience Range" onChange={handleChange} />
                <input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchJob;
