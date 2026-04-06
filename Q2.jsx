import {useState} from "react";
import "./App.css";

function Q2() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(0);

    function add() {
        setResult(Number(num1) + Number(num2));
    }

    function subtract() {
        setResult(Number(num1) - Number(num2));
    }

    function handleNum1Change(event) {
        setNum1(event.target.value);
    }

    function handleNum2Change(event) {
        setNum2(event.target.value);
    }

    return (
        <div className='container'>
            <h1>Simple Calculator</h1>
            <input type="number" placeholder='Enter first number' value={num1} onChange={handleNum1Change} /><br/><br/>
            <input type="number" placeholder='Enter second number' value={num2} onChange={handleNum2Change} />
            <br/><br/>
            <button onClick={add}>Add</button>
            <button onClick={subtract}>Subtract</button>
            <h2>Result: {result}</h2>
            <p>Aditya Rajesh 24BCE0942</p>
        </div>
    );
}

export default Q2;