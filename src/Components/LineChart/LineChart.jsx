import React, { Component, useState, useRef, useEffect } from "react";
import { render } from 'react-dom';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import "./LineChart.css";

async function fetchData() {
    const apiurl = "https://api.thingspeak.com/channels/2472562/feeds.json?api_key=ZI2OR2J1FVP8MT3Y&results=30";

    const response = await fetch(apiurl);

    const lineChartData = await response.json();

    return lineChartData;
};





class LineChart extends Component {
    constructor() {
        super();
        this.chartReference = React.createRef();
        this.state = {
            data: {
                label: 'Heart Beat',
                labels: [],
                datasets: [{
                    data: [],
                }]
            },
            initialized: false // Track if data has been initially fetched
        };
    }

    async componentDidMount() {
        await this.fetchAndUpdateChartData(); // Fetch data immediately upon mounting
        this.updateChartInterval = setInterval(this.fetchAndUpdateChartData, 15000); // Update data every 15 seconds
    }

    componentWillUnmount() {
        clearInterval(this.updateChartInterval);
    }

    fetchAndUpdateChartData = async () => {
        const jsonData = await fetchData();
        const labels = jsonData.feeds.map(feed => feed.field2);
        const data = jsonData.feeds.map(feed => parseInt(feed.field1));

        const newData = {
            
            labels: labels,
            datasets: [{
                label: 'Heart Beat',
                data: data,
            }]
        };

        this.setState({ data: newData, initialized: true });
    };

    render() {
        // Render the chart only when the data has been initially fetched
        if (!this.state.initialized) {
            return <div>Loading...</div>;
        }

        return (
            <div className="lc-border-property">
                <Line
                    ref={this.chartReference} 
                    data={this.state.data}
                    width={1200} 
                    height={1000} 
                    options={{ maintainAspectRatio: false, scales: { x: { grid: { display: false } }, y: { grid: { display: false } } }, pointRadius: "0", pointHoverRadius: "10" }}
                />
            </div>
        );
    }
}
export default LineChart;