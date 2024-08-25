import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Performance() {
    const [timeFrame, setTimeFrame] = useState('1d');

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Portfolio Performance',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Portfolio Performance',
            },
        },
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Performance</h1>
            <div className="card">
                <div className="card-body">
                    <Line data={chartData} options={options} />
                    <div className="btn-group mt-3" role="group">
                        {['1h', '1d', '1w', '1m', '1y', 'max'].map((frame) => (
                            <button
                                key={frame}
                                type="button"
                                className={`btn btn-sm ${timeFrame === frame ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setTimeFrame(frame)}
                            >
                                {frame}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Performance;