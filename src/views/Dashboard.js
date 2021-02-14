import React, { useState, useEffect, useCallback } from "react";
import { getAllDataByWeatherStation, CableApp } from "../helpers/api";
// reactstrap components
import { Row, Col } from "reactstrap";
import { BigCardComponent } from "../components/Card/BigCardComponent.js";
import PressureChart from "components/Chart/PressureChartComponent";
import VoltageChart from "components/Chart/VoltageChartComponent";
import DewPointChart from "components/Chart/DewPointChartComponent";
import AdditionalInfo from "components/Card/AdditionalInfoComponent";

const Dashboard = (props) => {
  const [wsId, setWsId] = useState(1);
  const [wsData, setWsData] = useState({
    temperatures: [],
    heatIndex: [],
    labels: [],
    humidity: [],
    relativePressure: [],
    absolutePressure: [],
    voltageBattery: [],
    accuracyInPercents: [],
    tendInWords: [],
    zambrettisWords: [],
  });
  const handleWsIdChange = useCallback((id) => {
    getAllDataByWeatherStation(id).then((res) => {
      let data = getData(res.data);

      // setWsData({...data, wsId: id})
      setWsId(id);
      setWsData(data);
      console.log(data, "all data", wsId);
    });
  });
  const formatDateArr = (dates) => {
    return dates.map((label) => {
      let date = new Date(label);
      return (
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2) +
        " " +
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2)
      );
    });
  };
  const getData = (data) => {
    return data.reduce((acc, val) => {
      for (const [key, value] of Object.entries(val)) {
        if (key != "id" && key != "weatherStation") {
          if (acc[key] == undefined) {
            acc[key] = [value];
          } else {
            acc[key] = [...acc[key], value];
          }
        }
      }
      acc.labels = formatDateArr(acc.created_at);
      return acc;
    }, {});
  };
  useEffect(() => {
    getAllDataByWeatherStation(wsId).then((res) => {
      let data = getData(res.data);

      setWsData(data);
      console.log(data, "all data");
    });
    CableApp.room = CableApp.cable.subscriptions.create(
      {
        channel: "ClientChannel",
        room: wsId,
      },
      {
        received: (res) => {
          let newData = {};
          for (const [key, value] of Object.entries(res)) {
            newData = { ...newData };
            newData[key] = wsData[key].shift().push(value);
          }
          newData.labels = formatDateArr(newData.created_at);
          setWsData(newData);
          console.log(newData);
        },
      }
    );
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <BigCardComponent
              wsId={wsId}
              onWsIdChange={handleWsIdChange}
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
    </>
  );
};

export { Dashboard };
