import React from "react";
import { Row, Col } from "reactstrap";
import { BigCardComponent } from "components/Card/BigCardComponent.js";
import PressureChart from "components/Chart/PressureChartComponent";
import VoltageChart from "components/Chart/VoltageChartComponent";
import DewPointChart from "components/Chart/DewPointChartComponent";
import AdditionalInfo from "components/Card/AdditionalInfoComponent";

const WebSocketCharts = (props) => {
  let wsId = props.wsId;
  let wsData = props.wsData;
  return (
    <div className="content">
      <Row>
        <Col xs="12">
          <BigCardComponent
            wsId={wsId}
            onWsIdChange={props.onWsIdChange}
            temperatures={wsData?.temperatures}
            heatIndex={wsData?.heatIndex}
            labels={wsData?.labels}
            humidity={wsData?.humidity}
          ></BigCardComponent>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <PressureChart
            labels={wsData?.labels}
            relative={wsData?.relativePressure}
            absolute={wsData?.absolutePressure}
          ></PressureChart>
        </Col>
        <Col lg="4">
          <VoltageChart
            labels={wsData?.labels}
            voltage={wsData?.voltageBattery}
          ></VoltageChart>
        </Col>
        <Col lg="4">
          <DewPointChart
            labels={wsData?.labels}
            dewPoint={wsData?.dewPoint}
            dewPointSpread={wsData?.dewPointSpread}
          ></DewPointChart>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12">
          <AdditionalInfo
            labels={wsData?.labels}
            accuracyInPercents={wsData?.accuracyInPercents}
            tendInWords={wsData?.tendInWords}
            zambrettisWords={wsData?.zambrettisWords}
          ></AdditionalInfo>
        </Col>
      </Row>
    </div>
  );
};

export default WebSocketCharts;
