import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './styles/CVAnalysisChart.css'; // Ensure the CSS path is correct

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CVAnalysisChart() {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:8000/analyze-cv/', {
                method: 'GET',
                mode: 'cors'  // This should be set to cors
            });
            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }
            const data = await response.json();
            setChartData({
                labels: Object.keys(data),
                datasets: [{
                    label: 'Skill Count',
                    data: Object.values(data),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)'
                }]
            });
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError(`Failed to load data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'CV Analysis Result'
            }
        }
    };

    return (
        <div className="chart-container">
            <button className="chart-load-button" onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Load Chart'}
            </button>
            {error && <p className="error-text">{error}</p>}
            {chartData && !loading && <Bar data={chartData} options={options} />}
        </div>
    );
}

export default CVAnalysisChart;
