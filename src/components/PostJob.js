// src/components/PostJob.js
import React, { useState } from 'react';
import './styles/PostJob.css'; // Adjust the path based on your project structure

function PostJob() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        companyName: '',
        requiredExperience: '',
        jobDescription: '',
        technicalSkills: '',
        urgency: '',
        salaryRange: '',
        jobLocation: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission here
    };

    return (
        <div className="post-job-bg">
        <form onSubmit={handleSubmit} className="post-job-form">
            <h1>Post a Job</h1>
            <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
            <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
            <input type="text" name="requiredExperience" placeholder="Required Experience" onChange={handleChange} />
            <textarea name="jobDescription" placeholder="Job Description" onChange={handleChange}></textarea>
            <input type="text" name="technicalSkills" placeholder="Technical Skills Required" onChange={handleChange} />
            <input type="text" name="urgency" placeholder="Urgency" onChange={handleChange} />
            <input type="text" name="salaryRange" placeholder="Salary Range" onChange={handleChange} />
            <input type="text" name="jobLocation" placeholder="Job Location" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default PostJob;
