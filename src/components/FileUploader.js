import React, { useState } from 'react';
import './styles/FileUploader.css'; // Import the CSS for styling

function FileUploader() {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setUploadStatus('');
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.status === 204) {
                setUploadStatus('File uploaded successfully!');
            } else {
                setUploadStatus('Failed to upload file.');
            }
        } catch (error) {
            setUploadStatus('Error uploading file.');
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload CV</button>
            {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
        </div>
    );
}

export default FileUploader;
