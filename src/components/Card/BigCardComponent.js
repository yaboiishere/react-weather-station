import React from "react";
import { TemperatureChartComponent } from "components/Chart/TemperatureChartComponent.js";
import { HumidityChartComponent } from "components/Chart/HumidityChartComponent.js";
import {
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { PeopleButtonComponent } from "components/PeopleButtonComponent.js";

const BigCardComponent = (props) => {
  const labels = props.labels;
  const temps = props.temperatures;
  const heatIndex = props.heatIndex;
  const humidity = props.humidity;
  console.log(props, "asdasdasdas");
  const handleOnClick = (id) => {
    if (props.wsId != id) {
      props.onWsIdChange(id);
    }
  };
  let lastTemp = temps ? temps[temps.length - 1] : "Data missing";
  let lastHeatIndex = heatIndex
    ? heatIndex[heatIndex.length - 1]
    : "Data missing";
  let lastHumidity = humidity ? humidity[humidity.length - 1] : "Data missing";
  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">
              Temperature (Celcius) + HeatIndex (Celcius)
            </h5>
            <CardTitle tag="h2">
              Temperature: {lastTemp} °C | Heat Index: {lastHeatIndex} °C
            </CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              {/* <Button
								tag="label"
								className={classNames("btn-simple", {
									active: props.wsId === 1,
								})}
								color="info"
								id="0"
								size="sm"
								onClick={() => handleOnClick(1)}>
								<input
									defaultChecked
									className="d-none"
									name="options"
									type="radio"
								/>
								<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
									Accounts
								</span>
								<span className="d-block d-sm-none">
									<i className="tim-icons icon-single-02" />
								</span>
							</Button> */}
              <PeopleButtonComponent
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
              />{" "}
              <PeopleButtonComponent
                wsId={3}
                handleOnClick={handleOnClick}
                text={"Крис"}
				active={props.wsId}
              />{" "}
              <PeopleButtonComponent
                wsId={4}
                handleOnClick={handleOnClick}
                text={"Злато"}
				active={props.wsId}
              />{" "}
              <PeopleButtonComponent
                wsId={5}
                handleOnClick={handleOnClick}
                text={"Лудия"}
				active={props.wsId}
              />
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <TemperatureChartComponent
          temperatures={temps}
          labels={labels}
          heatIndex={heatIndex}
        ></TemperatureChartComponent>
      </CardBody>
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">Humidity (%)</h5>
            <CardTitle tag="h2">Humidity: {lastHumidity} %</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <HumidityChartComponent
          humidity={humidity}
          labels={labels}
        ></HumidityChartComponent>
      </CardBody>
    </Card>
  );
};

BigCardComponent.propTypes = {};

export { BigCardComponent };
