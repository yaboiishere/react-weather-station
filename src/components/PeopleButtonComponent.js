import React from "react"
import {Button} from "reactstrap";
import classNames from "classnames";

const PeopleButtonComponent = (props) => {
    const handleOnClick = (id) =>{
        props.handleOnClick(id)
    }

    return(
    <Button
        tag="label"
        className={classNames("btn-simple", {
            active: props.active === props.wsId,
        })}
        color= {props.color || "info"}
        id={`${props.wsId - 1}`}
        size= {props.size || "sm"}
        onClick={() => handleOnClick(props.wsId)}>
        <input
            defaultChecked
            className="d-none"
            name="options"
            type="radio"
        />
        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
            {props.text || "Placeholder"}
        </span>
        <span className="d-block d-sm-none">
            <i className="tim-icons icon-single-02" />
        </span>
    </Button>)
}

PeopleButtonComponent.propTypes = {};

export { PeopleButtonComponent };