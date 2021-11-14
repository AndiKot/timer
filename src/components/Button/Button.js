import React from "react";
import "./Button.css";

function Button(props) {
    return (
        <button className="Button" onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default Button;
