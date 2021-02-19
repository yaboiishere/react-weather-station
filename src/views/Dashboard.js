import React, { useState, useEffect } from "react";
import { getAllDataByWeatherStation, CableApp } from "../helpers/api";
import { useCookies } from 'react-cookie';
// reactstrap components
import WebSocketComponent from "components/WebSocketComponent";
import WebSocketCharts from "components/Card/WebSocketChartsComponent";
const Dashboard = (props) => {
  const timeSpan = props.timeSpan
  const [cookies, setCookie] = useCookies(['wsId', 'timeSpan']);
  const wsIdCookie = cookies.wsId ? parseInt(cookies.wsId) :  1
  const [wsId, setWsId] = useState(wsIdCookie);
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
  const handleWsIdChange = (id) => {
    getAllDataByWeatherStation(id, timeSpan).then((res) => {
      let data = getData(res.data);
      setWsId(id);
      setWsData(data);
      setCookie('wsId', id)
    });
  };
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
    setWsData(data);
    console.log(wsData, "updateWsData");
    setRerender(!rerender);
  };
  const getData = (data) => {
    if(!data)return [] 
    let newData = data.reduce((acc, val) => {
      for (const [key, value] of Object.entries(val)) {
        if (key !== "id" && key !== "weatherStation") {
          if (acc[key] === undefined) {
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
    getAllDataByWeatherStation(wsId, timeSpan).then((res) => {
      let data = getData(res.data);

      setWsData(data);
      console.log(wsData, "Use Effect");
    });
  // eslint-disable-next-line
  }, [timeSpan]);
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
