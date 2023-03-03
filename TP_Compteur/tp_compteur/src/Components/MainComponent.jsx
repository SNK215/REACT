import { useState } from "react";
import { useRef } from "react";
import CounterComponent from "./CounterComponent";

const MainComponent = () => {

    const [count, setCount] = useState()
    const [nbrCount, setNbrCount] = useState([0])

    const myNumberRef = useRef()

    

    return (
        <>
        <div className="bg-dark text-light p-4 m-5 h-50 w-25 text-center rounded">
            <h1>MainComponent</h1>
            <hr/>
            <label htmlFor="value">Start value:</label>
            <input type="number" className="form-control m-1" name="number" ref={myNumberRef}/>
            <button className="btn btn-outline-light">Add a counter</button>
            <CounterComponent myNumber={myNumberRef}></CounterComponent>
        </div>
        </>
    )
}

export default MainComponent