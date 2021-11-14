import React from "react";
import DisplayElement from "../DisplayElement/DisplayElement";

import "./Display.css";

function createDisplay(time) {
    return Object.entries(time).map(elem => {
        return (
            <DisplayElement
                key={elem.join("")}
                label={elem[0][0].toUpperCase() + elem[0].slice(1)}
                value={elem[1]}
            />
        );
    });
}

function Display(props) {
    return <div className="Display">{createDisplay(props.time)}</div>;
}

export default Display;
