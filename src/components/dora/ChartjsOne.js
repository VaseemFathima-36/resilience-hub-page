import React from 'react'
import './DoraMetrics.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import faker from 'faker';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function ChartjsOne() {
  const labels = ['August 2023', 'September 2023', 'October 2023', 'November 2023']
  const [chartData, setChartData] = useState([3,5,4,2])
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: true
    },
    scales: {
      y: {
        beginAtZero: true,
        offset: false,
        ticks: {
          stepSize: 1
        }
      },
      x: {
        offset: true,
        grid: {
          display: false
        }
      }
  }
  }
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 1',
        data: chartData,
        borderColor: '#121205',
        borderWidth:1,
        backgroundColor: '#D7CDFF',
      }
    ]
  }
  return (
    <div className='chart p-3'>
      <p>Deployment Frequency Trend</p>
      <Line options={options} data={data} />
    </div>
  )
}
export default ChartjsOne



