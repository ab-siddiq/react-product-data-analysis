import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setData(data))
    }, [])
    console.log(data)
    return (
        <div className='grid grid-cols-2 m-20'>
            <div className="">
                <LineChart width={500} height={400} data={data}>
                    <Line dataKey="investment"></Line>
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className="">
                <BarChart width={500} height={400} data={data}>
                <Line dataKey="investment"></Line>
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey="month" stroke="#8884d8"></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey="investment" fill="#8884d8" barSize={20}></Bar>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;