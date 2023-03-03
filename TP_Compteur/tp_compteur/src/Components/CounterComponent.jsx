import { useState } from "react";
import { useRef } from "react";

export const CounterComponent = (props) => {

    const launchCounter = () => {
        setInterval(()=>{
            props.myNumber.current.value++
            console.log(props.myNumber.current.value);
        },1000)
    }

    return (
        <>
        <h3>Counter</h3>
        <hr/>
        <div></div>
        </>
    )
}

export default CounterComponent