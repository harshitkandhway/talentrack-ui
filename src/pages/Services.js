import React from 'react';
import FileUploader from '../components/FileUploader'; // Adjust the path as necessary
import CVAnalysisChart from '../components/CVAnalysisChart';
import "./styles/Services.css"
function Services() {
  return (
    <div className="Services-page-bg">
    <div className="Services-bg">
        <div className="Services">
            <h1>Upload a File</h1>
            <FileUploader />
        </div>
        <div className='Services'>
            <CVAnalysisChart />
        </div>
    </div>
    </div>
  );
}

export default Services;
