import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { chart1_2_options } from "../../variables/charts";
import { Line, Bar } from "react-chartjs-2";

const TemperatureChartComponent = (props) => {
	const temps = props.temps;
	let options = {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		tooltips: {
			backgroundColor: "#f5f5f5",
			titleFontColor: "#333",
			bodyFontColor: "#666",
			bodySpacing: 4,
			xPadding: 12,
			mode: "nearest",
			intersect: 0,
			position: "nearest",
		},
		responsive: true,
		scales: {
			yAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.0)",
						zeroLineColor: "transparent",
					},
					ticks: {
						suggestedMin: Math.min(...temps),
						suggestedMax: Math.max(...temps),
						padding: 20,
						fontColor: "#9a9a9a",
					},
				},
			],
			xAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: "rgba(29,140,248,0.1)",
						zeroLineColor: "transparent",
					},
					ticks: {
						padding: 20,
						fontColor: "#9a9a9a",
					},
				},
			],
		},
	};
	const chartData = (canvas) => {
		let ctx = canvas.getContext("2d");

		let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
		gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
		gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

		return {
			labels: props.labels,
			datasets: [
				{
					label: "Temperature",
					fill: false,
					backgroundColor: gradientStroke,
					borderColor: "#1f8ef1",
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					pointBackgroundColor: "#1f8ef1",
					pointBorderColor: "rgba(255,255,255,0)",
					pointHoverBackgroundColor: "#1f8ef1",
					pointBorderWidth: 20,
					pointHoverRadius: 3,
					pointHoverBorderWidth: 15,
					pointRadius: 1,
					data: props.temps,
				},
			],
			// ticks: {
			// 	min: Math.min(...temp),
			// 	max: Math.max(...temp),
			// },
		};
	};
	// const getData = (id) => {
	// };
	return (
		<div className="chart-area">
			<Line
				data={chartData} //{chartExample1["data1"]} //this.state.weatherStationId]}
				options={options}
			/>
		</div>
	);
};

TemperatureChartComponent.propTypes = {};

export { TemperatureChartComponent };
