/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";

const Map = () => {
  Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

  delete Leaflet.Icon.Default.prototype._getIconUrl;
  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  // position we will use later
  const position = [43.2238, 27.9071];
  // add marker to the map
  const marker1 = [43.2286, 27.88983];
  const marker2 = [43.22193, 27.92269];
  const marker3 = [43.22804, 27.8856];
  const marker4 = [43.237995, 27.884];
  const marker5 = [43.22333, 27.9253];
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-plain">
            <CardHeader>Locations of all weather stations</CardHeader>
            <CardBody>
              <MapContainer
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "800px",
                }}
                className="map"
                id="map"
                center={position}
                zoom={14}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={marker1}>
                  <Popup>
                    <b>WS 1</b>
                    <br />
                    Ул. Вяра
                    <br />
                    Варна
                  </Popup>
                </Marker>
                <Marker position={marker2}>
                  <Popup>
                    <b>WS 2</b>
                    <br />
                    Ул. Никола Козлев
                    <br />
                    Варна
                  </Popup>
                </Marker>
                <Marker position={marker3}>
                  <Popup>
                    <b>WS 3</b>
                    <br />
                    Ул. Младежка
                    <br />
                    Варна
                  </Popup>
                </Marker>
                <Marker position={marker4}>
                  <Popup>
                    <b>WS 4</b>
                    <br />
                    ул. Цар Светослав Тертер
                    <br />
                    Варна
                  </Popup>
                </Marker>
                <Marker position={marker5}>
                  <Popup>
                    <b>WS 5</b>
                    <br />
                    ул. Дубровник
                    <br /> Варна"
                  </Popup>
                </Marker>
              </MapContainer>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Map;
