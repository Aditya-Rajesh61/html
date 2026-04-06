import {useState} from "react";
import "./App.css";

function Q4() {
    const [m1, setM1] = useState("");
    const [m2, setM2] = useState("");
    const [m3, setM3] = useState("");
    const [result, setResult] = useState("");

    function calculateGrade() {
        const avg = (Number(m1) + Number(m2) + Number(m3)) / 3;

        if (avg >= 90) {
            setResult("Grade S");
        } else if (avg >= 80) {
            setResult("Grade A");
        } else if (avg >= 70) {
            setResult("Grade B");
        } else if (avg >= 60) {
            setResult("Grade C");
        } else if (avg >= 50) {
            setResult("Grade D");
        } else {
            setResult("Fail");
        }
    }

    function handleM1Change(event) { setM1(event.target.value); }
    function handleM2Change(event) { setM2(event.target.value); }
    function handleM3Change(event) { setM3(event.target.value); }

    return (
        <div className="container">
            <h1>Grade Calculation</h1>
            <input type="number" placeholder="Marks 1" value={m1} onChange={handleM1Change} />
            <br/><br/>
            <input type="number" placeholder="Marks 2" value={m2} onChange={handleM2Change} />
            <br/><br/>
            <input type="number" placeholder="Marks 3" value={m3} onChange={handleM3Change} />
            <br/><br/>
            <button onClick={calculateGrade}>Calculate</button>
            <h2>Result: {result}</h2>
            <p>Aditya Rajesh 24BCE0942</p>
        </div>
    );
}

export default Q4;