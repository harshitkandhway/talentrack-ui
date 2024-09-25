// src/components/PostJob.js
import React, { useState } from 'react';
import './styles/PostJob.css'; // Adjust the path based on your project structure

function PostJob() {
    const [formData, setFormData] = useState({
        title: '',
        company_name: '',
        years_of_experience: 0,
        description: '',
        requirements: '',
        joining_date: '',
        salary: 0,
        location: ''
    });

    const handleChange = (e) => {
        const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/job_posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Success:', result);
            alert('Job posted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to post job.');
        }
    };

    return (
        <div className="post-job-bg">
            <form onSubmit={handleSubmit} className="post-job-form">
                <h1>Post a Job</h1>
                <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} />
                <input type="text" name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} />
                <input type="number" name="years_of_experience" placeholder="Required Experience" value={formData.years_of_experience} onChange={handleChange} />
                <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange}></textarea>
                <input type="text" name="requirements" placeholder="Technical Skills Required" value={formData.requirements} onChange={handleChange} />
                <input type="text" name="joining_date" placeholder="Joining Date (YYYY-MM-DD)" value={formData.joining_date} onChange={handleChange} />
                <input type="number" name="salary" placeholder="Salary Range" value={formData.salary} onChange={handleChange} />
                <input type="text" name="location" placeholder="Job Location" value={formData.location} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostJob;
