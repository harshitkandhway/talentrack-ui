import React from 'react';
import FileUploader from '../components/FileUploader'; // Adjust the path as necessary
import CVAnalysisChart from '../components/CVAnalysisChart';

function Services() {
  return (
    <div className="Services-bg">
        <div className="Services">
            <h1>Upload a File</h1>
            <FileUploader />
        </div>
        <div className='Services'>
            <CVAnalysisChart />
        </div>
    </div>
  );
}

export default Services;
