import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getTempsByWeatherStation } from "../../helpers/api";
import { chart1_2_options } from "../../variables/charts";
import { Line, Bar } from "react-chartjs-2";

const TemperatureChartComponent = (props) => {
	const [labels, setLabel] = useState();
	const [temp, setTemp] = useState();
	useEffect(() => {
		getTempsByWeatherStation(props.wsId).then((res) => {
			if (res) {
				setTemp(Object.values(res.data));
				setLabel(Object.keys(res.data));
			}
			// temp = Object.values(res.data);
			// labels = Object.keys(res.data);
		});
	});
	const chartData = (canvas) => {
		let ctx = canvas.getContext("2d");

		let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

		gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
		gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
		gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

		return {
			labels: labels,
			datasets: [
				{
					label: "Temperature",
					fill: true,
					backgroundColor: gradientStroke,
					borderColor: "#1f8ef1",
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					pointBackgroundColor: "#1f8ef1",
					pointBorderColor: "rgba(255,255,255,0)",
					pointHoverBackgroundColor: "#1f8ef1",
					pointBorderWidth: 20,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 15,
					pointRadius: 4,
					data: temp,
				},
			],
		};
	};
	// const getData = (id) => {
	// };
	return (
		<div className="chart-area">
			<Line
				data={chartData} //{chartExample1["data1"]} //this.state.weatherStationId]}
				options={chart1_2_options}
			/>
		</div>
	);
};

TemperatureChartComponent.propTypes = {};

export { TemperatureChartComponent };
