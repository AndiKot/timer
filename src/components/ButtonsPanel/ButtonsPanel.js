import React from "react";
import "./ButtonsPanel.css";

import Button from "../Button/Button";

function createButtonsPanel(buttons) {
    return Object.keys(buttons).map(key => {
        const button = buttons[key];

        return (
            <Button
                key={key + button.label}
                label={button.label}
                clickHandler={button.clickHandler}
            />
        );
    });
}

function ButtonsPanel(props) {
    return (
        <div className="ButtonsPanel">{createButtonsPanel(props.buttons)}</div>
    );
}

export default ButtonsPanel;
