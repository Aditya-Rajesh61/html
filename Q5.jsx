import {useState} from "react";
import "./App.css";

function Q5() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(event) {
        setTask(event.target.value);
    }

    function addTask() {
        if (task != "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input type="text" placeholder="Enter task" value={task} onChange={handleChange} />
            <br/><br/>
            <button onClick={addTask}>Add the task</button>
            <ol>
                {tasks.map(function(t, index) {
                    return <li key={index}>{t}</li>;
                })}
            </ol>
            <p>Aditya Rajesh 24BCE0942</p>
        </div>
    );
}

export default Q5;