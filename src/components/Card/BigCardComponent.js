import React, { useState, useEffect } from "react";
import {
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { PeopleButtons } from "components/Card/PeopleButtonsComponent";
import { getApprovedPeople } from "../../helpers/api";
import { TemperatureChart } from "components/Chart/TemperatureChartComponent.js";
import { HumidityChart } from "components/Chart/HumidityChartComponent.js";

const BigCardComponent = (props) => {
  const labels = props.labels;
  const temps = props.temperatures;
  const heatIndex = props.heatIndex;
  const humidity = props.humidity;
  const [people, setPeople] = useState([]);
  const handleOnClick = (id) => {
    if (props.wsId !== id) {
      props.onWsIdChange(id);
    }
  };
  let lastTemp = temps ? temps[temps.length - 1] : "Data missing";
  let lastHeatIndex = heatIndex
    ? heatIndex[heatIndex.length - 1]
    : "Data missing";
  let lastHumidity = humidity ? humidity[humidity.length - 1] : "Data missing";

  useEffect(() => {
    getApprovedPeople().then((res) => {
      if (res.status === 200) {
        const users = res.data.map((person) => {
          return { username: person.user.username, id: person.weather_station };
        });
        setPeople(users);
      }
    });
  }, []);
  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">
              Temperature (Celcius) + HeatIndex (Celcius)
            </h5>
            <CardTitle tag="h2">
              <span style={{ marginRight: "40px" }}>
                <i className="fas fa-thermometer-half text-info"></i>
                Temperature: {lastTemp} °C
              </span>
              <span>
                <i className="fas fa-sun text-warning"></i>Heat Index:{" "}
                {lastHeatIndex} °C
              </span>
            </CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <PeopleButtons
                wsId={props.wsId}
                people={people}
                handleOnClick={handleOnClick}
              ></PeopleButtons>
              {/* <PeopleButtonComponent
                wsId={1}
                handleOnClick={handleOnClick}
                text={"Киро"}
                active={props.wsId}
              />
              <PeopleButtonComponent
                wsId={2}
                handleOnClick={handleOnClick}
                text={"Мишо"}
                active={props.wsId}
              />
              <PeopleButtonComponent
                wsId={3}
                handleOnClick={handleOnClick}
                text={"Крис"}
                active={props.wsId}
              />
              <PeopleButtonComponent
                wsId={4}
                handleOnClick={handleOnClick}
                text={"Злато"}
                active={props.wsId}
              />
              <PeopleButtonComponent
                wsId={5}
                handleOnClick={handleOnClick}
                text={"Лудия"}
                active={props.wsId}
              /> */}
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <TemperatureChart
          temperatures={temps}
          labels={labels}
          heatIndex={heatIndex}
        ></TemperatureChart>
      </CardBody>
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">Humidity (%)</h5>
            <CardTitle tag="h2">
              <i className="fas fa-tint text-info"></i>Humidity: {lastHumidity}{" "}
              %
            </CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <HumidityChart humidity={humidity} labels={labels}></HumidityChart>
      </CardBody>
    </Card>
  );
};

BigCardComponent.propTypes = {};

export { BigCardComponent };
