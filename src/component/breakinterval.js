import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }
    function increaseCounter() {
        if (props.breakInterval === 60) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <h4>Break Length</h4>
            <button onClick={decreaseCounter}>Down</button>
            <p>{props.breakInterval}</p>
            <button onClick={increaseCounter}> Up </button>
        </section>
    );
}
export default BreakInterval;
