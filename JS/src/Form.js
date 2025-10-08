import {useState} from "react";


function Form(props) {
    let [value, setValue] = useState("");
    let {addTask} = props;

    let sendSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
            addTask(value);
            setValue("");
        }

    }

    return (
        <div className="add-task">
            <form className="add-form" onSubmit={sendSubmit}>
                <input type="text"
                       className="form-control"
                       value={value}
                       placeholder="Add new Task"
                       onChange={(e) => setValue(e.target.value)}
                />
                <button className="add-btn" onClick={sendSubmit}>Add Task</button>
            </form>

        </div>
    )
}
export default Form;