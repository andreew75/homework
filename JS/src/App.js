
import './App.css';
import {useState} from "react";
import Task from './Task';
import Form from './Form';

function App() {
    let [tasks, setTasks] = useState([
        {
            text: "Complete task 1",
            done: false,
            deleted: false
        },
        {
            text: "Complete task 2",
            done: false,
            deleted: false
        },
        {
            text: "Complete task 3",
            done: false,
            deleted: false
        }
    ]);

    let addTask = text => {
        let newTask = [...tasks, {text, done: false, deleted: false}];
        setTasks(newTask);
    }

    let doneTask = index => {
        let newTask = [...tasks];
        newTask[index].done = !newTask[index].done;
        setTasks(newTask);
    }

    let deleteTask = index => {
        let newTask = [...tasks];
        newTask[index].deleted = true;
        setTasks(newTask);
    }

    let restoreTask = index => {
        let newTask = [...tasks];
        newTask[index].deleted = false;
        setTasks(newTask);
    }

    return (
        <div className="App">
            <div className="App-header">
                <h2>Tasks List</h2>
            </div>
            <div className="task-list">
                {
                    tasks.map((task, index) => (
                        task.deleted ? (
                            <div key={index} className="restore-task">
                                <button onClick={() => restoreTask(index)}>Restore Task</button>
                            </div>
                        ) : (
                            <Task key={index} task={task} doneTask={doneTask} index={index} deleteTask={deleteTask} />
                        )
                    ))
                }
                <Form addTask={addTask} />
            </div>
        </div>
    );
}

export default App;