import React from "react";
import "./DisplayElement.css";

function DisplayElement(props) {
    return (
        <div className="DisplayElement">
            <span>{props.label}</span>
            <div className="numbers">{props.value}</div>
        </div>
    );
}

export default DisplayElement;
