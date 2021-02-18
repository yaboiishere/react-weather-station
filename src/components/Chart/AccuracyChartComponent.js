import React from "react";
import { Line } from "react-chartjs-2";

const AccuracyChart = (props) => {
  const accuracyInPercents = props.accuracyInPercents;
  const labels = props.labels;
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
    let ctxBig2 = canvas.getContext("2d");

    var gradientStrokeBig2 = ctxBig2.createLinearGradient(0, 230, 0, 50);

    gradientStrokeBig2.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStrokeBig2.addColorStop(0.4, "rgba(72,72,176,0.0)");
    return {
      labels: labels,
      datasets: [
        {
          label: "Accuracy",
          fill: true,
          backgroundColor: gradientStrokeBig2,
          borderColor: "#0066ff",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#0066ff",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#0066ff",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: accuracyInPercents,
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
        options={options}
      />
    </div>
  );
};

AccuracyChart.propTypes = {};

export { AccuracyChart };
