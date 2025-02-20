import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the chart elements
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Statistics = () => {
    const data = {
        labels: ['Total Sales', 'Total Products', 'Total Customers', 'Total Orders', 'Total Reviews'],
        datasets: [
            {
                label: 'Statistics',
                data: [5000, 120, 350, 450, 780], // Replace with your dynamic data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Platform Statistics',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2 className='font-bold text-2xl text-center'>Statistics</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Statistics;
