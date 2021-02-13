import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Line } from "react-chartjs-2";

const PressureChart = (props) => {
  const relative = props.relative;
  const absolute = props.absolute;
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
            color: "rgba(225,78,202,0.1)",
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
    let ctxPres = canvas.getContext("2d");
    var gradientStrokePres = ctxPres.createLinearGradient(0, 230, 0, 50);

    gradientStrokePres.addColorStop(1, "rgba(72,72,176,0.2)");
    gradientStrokePres.addColorStop(0.2, "rgba(72,72,176,0.0)");

    return {
      labels: labels,
      datasets: [
        {
          label: "Absolute Pressure",
          fill: true,
          backgroundColor: gradientStrokePres,
          borderColor: "#d048b6",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#d048b6",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#d048b6",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: absolute,
        },
        {
          label: "Relative Pressure",
          fill: true,
          backgroundColor: gradientStrokePres,
          borderColor: "#ffff66",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ffff66",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#ffff66",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 1,
          data: relative,
        },
      ],
    };
  };

  let lastRelative = relative ? relative[relative.length - 1] : "Data missing";
  let lastAbsolute = absolute ? absolute[absolute.length - 1] : "Data missing";

  return (
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Absolute + Relative Pressure (HPa)</h5>
        <CardTitle tag="h3">
          <div>
            <i className="fas fa-tachometer-alt text-info"></i> Relative:{" "}
            {lastRelative} HPa
          </div>
          <div>
            <i
              className="fas fa-tachometer-alt text-info"
              style={{ visibility: "hidden" }}
            ></i>
            Absolute: {lastAbsolute} HPa
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

export default PressureChart;
