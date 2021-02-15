import React, { useEffect } from "react";

const WebSocketComponent = (props) => {
  useEffect(() => {
    console.log(props);
    props.CableApp.room = props.CableApp.cable.subscriptions.create(
      {
        channel: "ClientChannel",
        room: props.wsId,
      },
      {
        received: (res) => {
          console.log(res);
          console.log(props.wsData, "old props.wsData");
          for (const [key, value] of Object.entries(res.data)) {
            if (key === "id" || key === "weatherStation" || key === "labels") {
              console.log("skip");
            } else {
              //   acc = { ...acc };
              props.wsData[key].push(value);
            }
          }
          props.wsData.labels = props.formatDateArr(props.wsData.created_at);
          console.log(props.wsData, "new props.wsData");
          props.updateWsData(props.wsData);
        },
      }
    );
    return () => {
      props.CableApp.room.unsubscribe();
    };
  });
  return <></>;
};

export default WebSocketComponent;
