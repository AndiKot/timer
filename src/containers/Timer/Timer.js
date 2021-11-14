import React, { useState, useEffect } from "react";
import { interval } from "rxjs";
import "./Timer.css";
import Display from "../../components/Display/Display";
import ButtonsPanel from "../../components/ButtonsPanel/ButtonsPanel";

const timer = interval(1000);
let prevClickTimestamp = 0;
let count = 70000;

function Timer() {
    const [time, setTime] = useState({
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const [isRunning, setIsRunning] = useState(false);

    const buttons = {
        start: {
            label: isRunning ? "Stop" : "Start",
            clickHandler: isRunning ? resetHandler : startHandler,
        },
        pause: {
            label: "Pause",
            clickHandler: pauseHandler,
        },
        reset: {
            label: "Reset",
            clickHandler: resetHandler,
        },
    };

    useEffect(() => {
        if (isRunning) {
            const subscriber = timer.subscribe(value => {
                count += 1;
                setTime({
                    hours: toDoubleSymbol(Math.floor(count / 3600)),
                    minutes: toDoubleSymbol(Math.floor(count / 60) % 60),
                    seconds: toDoubleSymbol(count % 60),
                });
            });
            return () => subscriber.unsubscribe();
        }
    }, [time, isRunning]);

    function startHandler() {
        setIsRunning(!isRunning);
    }

    function pauseHandler(event) {
        if (event.timeStamp - prevClickTimestamp < 300) {
            setIsRunning(false);
        }

        prevClickTimestamp = event.timeStamp;
    }

    function resetHandler() {
        setTime({
            hours: "00",
            minutes: "00",
            seconds: "00",
        });
        setIsRunning(false);
        count = 0;
    }

    function toDoubleSymbol(number) {
        const str = number + "";
        return str.length < 2 ? "0" + number : str;
    }

    return (
        <div className="Timer">
            <Display time={time} />
            <ButtonsPanel buttons={buttons} />
        </div>
    );
}

export default Timer;
