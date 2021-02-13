import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";

const VoltageChart = (props) => {
  const voltage = props.voltage;
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
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 3.3,
            suggestedMax: 4.2,
            padding: 20,
            fontColor: "#9e9e9e",
          },
        },
      ],

      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
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
    let ctxVolt = canvas.getContext("2d");

    var gradientStrokeVolt = ctxVolt.createLinearGradient(0, 230, 0, 50);

    gradientStrokeVolt.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStrokeVolt.addColorStop(0.4, "rgba(29,140,248,0.0)");

    return {
      type: "bar",
      responsive: true,
      legend: {
        display: false,
      },
      labels: labels,
      datasets: [
        {
          label: "Volts",
          fill: true,
          backgroundColor: gradientStrokeVolt,
          hoverBackgroundColor: gradientStrokeVolt,
          borderColor: "#1f8ef1",
          borderWidth: 3,
          borderDash: [],
          borderDashOffset: 0.0,
          data: voltage,
        },
      ],
    };
  };

  let lastVoltage = voltage ? voltage[voltage.length - 1] : "Data missing";

  return (
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Battery Voltage (V)</h5>
        <CardTitle tag="h3">
          <div>
            <i className="fas fa-bolt text-primary" /> Voltage: {lastVoltage} V
          </div>
          <div style={{ visibility: "hidden" }}>
            <i className="fas fa-bolt text-primary" /> Voltage: V
          </div>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Bar data={chartData} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default VoltageChart;
