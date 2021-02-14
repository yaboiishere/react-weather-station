import { AccuracyChart } from "components/Chart/AccuracyChartComponent";
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
const AdditionalInfo = (props) => {
  const zambrettisWords = props.zambrettisWords;
  const accuracyInPercents = props.accuracyInPercents;
  const tendInWords = props.tendInWords;

  let lastZambrettisWords = zambrettisWords
    ? zambrettisWords[zambrettisWords.length - 1]
    : "Data missing";
  let lastAccuracyInPercents = accuracyInPercents
    ? accuracyInPercents[accuracyInPercents.length - 1]
    : "Data missing";
  let lastTendInWords = tendInWords
    ? tendInWords[tendInWords.length - 1]
    : "Data missing";

  return (
    <Card>
      {/* <CardHeader>
        <CardTitle tag="h4">Additional Info</CardTitle>
      </CardHeader> */}
      <CardBody>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>ZAMBRETTIS WORDS</th>
              <th>ACCURACY IN PERCENT (%)</th>
              <th>TREND IN WORDS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lastZambrettisWords}</td>
              <td>{lastAccuracyInPercents}</td>
              <td>{lastTendInWords}</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      {/* <AccuracyChart
        labels={props.labels}
        accuracyInPercents={props.accuracyInPercents}
      ></AccuracyChart> */}
    </Card>
  );
};

export default AdditionalInfo;
