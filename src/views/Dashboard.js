import React, { useState, useEffect, useCallback } from "react";
import { getAllDataByWeatherStation, CableApp } from "../helpers/api";
// reactstrap components
import WebSocketComponent from "components/WebSocketComponent";
import WebSocketCharts from "components/Card/WebSocketChartsComponent";
const Dashboard = (props) => {
  const [wsId, setWsId] = useState(3);
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
  const [rerender, setRerender] = useState(false);
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
  const updateWsData = (data) => {
    console.log(data, "data");
    setWsData(data);
    console.log(wsData, "wsData");
    setRerender(!rerender);
  };
  const getData = (data) => {
    let newData = data.reduce((acc, val) => {
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
    setWsData(newData);
    return newData;
  };
  useEffect(() => {
    getAllDataByWeatherStation(wsId).then((res) => {
      let data = getData(res.data);

      setWsData(data);
      console.log(wsData, "all data");
    });
  }, []);
  return (
    <>
      <WebSocketComponent
        wsId={wsId}
        wsData={wsData}
        formatDateArr={formatDateArr}
        updateWsData={updateWsData}
        CableApp={CableApp}
      />
      <WebSocketCharts
        wsId={wsId}
        wsData={wsData}
        onWsIdChange={handleWsIdChange}
      />
    </>
  );
};

export { Dashboard };
