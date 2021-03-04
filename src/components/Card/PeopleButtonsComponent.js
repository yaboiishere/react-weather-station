import React from "react";
import { PeopleButtonComponent } from "components/PeopleButtonComponent";

const PeopleButtons = (props) => {
  const peopleElements = props?.people.map((person) => {
    return (
      <PeopleButtonComponent
        wsId={person.id}
        handleOnClick={props.handleOnClick}
        text={person.username}
        active={props.wsId}
        key={person.id}
      />
    );
  });
  return <>{peopleElements}</>;
};
export { PeopleButtons };
