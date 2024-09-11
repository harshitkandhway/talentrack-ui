import React from 'react';
import "./styles/About.css";

function About() {
    return (
        <div className="About-page">
            <h1>About Page</h1>
            <div>
                <h2>Problem Statement</h2>
                <p>In today's competitive job market, both job seekers and employers face significant challenges in finding the perfect match. Job seekers often struggle to find positions that align with their skills, experiences, and career aspirations. On the other hand, employers find it challenging to identify candidates who not only possess the required technical skills but also fit culturally and have the potential for long-term success within the company. This disconnect results in prolonged job vacancies, increased hiring costs, and missed opportunities for both parties.</p>

                <h2>Proposed Solution</h2>
                <p>To address these challenges, we propose the development of an AI-driven Job Matching Platform. This platform will leverage advanced algorithms in Natural Language Processing (NLP) and Machine Learning to analyze job descriptions and applicant resumes, effectively matching the right candidates with the right opportunities. By automating the initial screening and matching process, the platform aims to reduce the time and resources spent on recruitment, while simultaneously increasing the accuracy of matches.</p>

                <h3>Key Features</h3>
                <ul>
                    <li><b>Resume and Job Description Parsing</b>
                        <p className="key-feature">Functionality: Extract and interpret key information from resumes and job descriptions using NLP techniques.</p>
                        <p className="benefit">Benefits: Ensures accurate understanding of job requirements and candidate qualifications.</p>
                    </li>
                    <li><b>Intelligent Matching Algorithm</b>
                        <p className="key-feature">Functionality: Utilize machine learning models to compare and match resumes with job descriptions based on skills, experience, and other relevant factors.</p>
                        <p className="benefit">Benefits: Increases the likelihood of a successful match by considering a comprehensive set of attributes.</p>
                    </li>
                    <li><b>Candidate Ranking System</b>
                        <p className="key-feature">Functionality: Rank candidates for a job position based on the relevance of their profile to the job requirements.</p>
                        <p className="benefit">Benefits: Streamlines the recruitment process by prioritizing the most suitable candidates.</p>
                    </li>
                    <li><b>Automated Skill Gap Analysis</b>
                        <p className="key-feature">Functionality: Identify any skill gaps between what the job requires and what the candidates possess.</p>
                        <p className="benefit">Benefits: Provides valuable insights for both employers and job seekers to address any discrepancies.</p>
                    </li>
                    <li><b>Feedback Loop for Continuous Improvement</b>
                        <p className="key-feature">Functionality: Incorporate feedback from both job seekers and employers to refine the matching algorithms.</p>
                        <p className="benefit">Benefits: Enhances the accuracy and efficiency of the matching process over time.</p>
                    </li>
                    <li><b>User-Friendly Dashboard</b>
                        <p className="key-feature">Functionality: Provide a simple, intuitive interface for both job seekers and employers to manage their profiles, job postings, and matches.</p>
                        <p className="benefit">Benefits: Enhances user experience and engagement with the platform.</p>
                    </li>
                    <li><b>Data Security and Privacy</b>
                        <p className="key-feature">Functionality: Implement robust security measures to protect sensitive personal and professional information.</p>
                        <p className="benefit">Benefits: Ensures compliance with data protection regulations and builds trust with users.</p>
                    </li>
                    <li><b>Analytics and Reporting Tools</b>
                        <p className="key-feature">Functionality: Offer comprehensive reporting tools for tracking the effectiveness of the recruitment process.</p>
                        <p className="benefit">Benefits: Provides employers with insights into recruitment metrics and outcomes.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
