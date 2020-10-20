import React, { useState, useEffect } from "react";
import { TemperatureChartComponent } from "components/Chart/TemperatureChartComponent.js";
import PropTypes from "prop-types";
import {
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col,
} from "reactstrap";
import classNames from "classnames";
import { format } from "date-fns";
import { getTempsByWeatherStation } from "../../helpers/api";

const BigCardComponent = (props) => {
	const [labels, setLabel] = useState([]);
	const [temps, setTemp] = useState([]);
	// const [wsId, setWsId] = useState(props.wsId);
	useEffect(() => {
		getTempsByWeatherStation(props.wsId).then((res) => {
			if (res) {
				const cut_labels = Object.keys(res.data).map((label) => {
					return format(new Date(label), "hh:mm dd/MM");
				});
				setTemp(Object.values(res.data));

				setLabel(cut_labels);
			} else {
				//err
			}
		});
	}, []);

	const handleOnClick = (id) => {
		props.onWsIdChange(id);
		getTempsByWeatherStation(props.wsId).then((res) => {
			if (res.status === 200) {
				console.log(res);
				const cut_labels = Object.keys(res.data).map((label) => {
					return format(new Date(label), "hh:mm dd/MM");
				});
				setTemp(Object.values(res.data));

				setLabel(cut_labels);
			} else {
				console.log(res);
			}
		});
	};

	return (
		<Card className="card-chart">
			<CardHeader>
				<Row>
					<Col className="text-left" sm="6">
						<h5 className="card-category">
							Temperature (Celcius) + HeatIndex (Celcius)
						</h5>
						<CardTitle tag="h2">
							Temperature: {temps[temps.length - 1]} °C
						</CardTitle>
					</Col>
					<Col sm="6">
						<ButtonGroup
							className="btn-group-toggle float-right"
							data-toggle="buttons">
							<Button
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
							</Button>
							<Button
								color="info"
								id="1"
								size="sm"
								tag="label"
								className={classNames("btn-simple", {
									active: props.wsId === 2,
								})}
								onClick={() => handleOnClick(2)}>
								<input className="d-none" name="options" type="radio" />
								<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
									Purchases
								</span>
								<span className="d-block d-sm-none">
									<i className="tim-icons icon-gift-2" />
								</span>
							</Button>
							<Button
								color="info"
								id="2"
								size="sm"
								tag="label"
								className={classNames("btn-simple", {
									active: props.wsId === 3,
								})}
								onClick={() => handleOnClick(3)}>
								<input className="d-none" name="options" type="radio" />
								<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
									Sessions
								</span>
								<span className="d-block d-sm-none">
									<i className="tim-icons icon-tap-02" />
								</span>
							</Button>
						</ButtonGroup>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<TemperatureChartComponent
					temps={temps}
					labels={labels}></TemperatureChartComponent>
			</CardBody>
		</Card>
	);
};

BigCardComponent.propTypes = {};

export { BigCardComponent };
