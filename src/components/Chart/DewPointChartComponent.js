import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Line } from "react-chartjs-2";

const DewPointChart = (props) => {
  const dewPoint = props.dewPoint;
  const dewPointSpread = props.dewPointSpread;
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
            fontColor: "#9e9e9e",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(0,242,195,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],
    },
  };
  const chartData = (canvas) => {
    let ctxDPG = canvas.getContext("2d");

    var gradientStrokeDPG = ctxDPG.createLinearGradient(0, 230, 0, 50);

    gradientStrokeDPG.addColorStop(1, "rgba(66,134,121,0.15)");

    return {
      labels: labels,
      datasets: [
        {
          label: "Dew Point",
          fill: true,
          backgroundColor: gradientStrokeDPG,
          borderColor: "#00ffff",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00ffff",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00ffff",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: dewPoint,
        },
        {
          label: "Dew Point Spread",
          fill: true,
          backgroundColor: gradientStrokeDPG,
          borderColor: "#00d6b4",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: dewPointSpread,
        },
      ],
    };
  };

  let lastDewPoint = dewPoint ? dewPoint[dewPoint.length - 1] : "Data missing";
  let lastDewPointSpread = dewPointSpread
    ? dewPointSpread[dewPointSpread.length - 1]
    : "Data missing";

  return (
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Dew Point + Dew Point Spread</h5>
        <CardTitle tag="h3">
          <div>
            <i className="fas fa-tint text-success" /> Dew Point: {lastDewPoint}{" "}
            °C
          </div>
          <div>
            <i
              className="fas fa-tint text-success"
              style={{ visibility: "hidden" }}
            />{" "}
            Dew Point Spread: {lastDewPointSpread} °C
          </div>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line data={chartData} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default DewPointChart;
