function Task(props) {
    let {task, doneTask, index, deleteTask} = props;

    return (
        <div className="task">
            <span className="task-text" style={{textDecoration: task.done ? 'line-through' : ''}}>
                {task.text}
            </span>
            <div className="task-actions">
                <button
                    className={task.done ? "done-btn completed" : "done-btn"}
                    onClick={() => doneTask(index)}
                    >
                    {task.done ? 'Completed' : 'Done'}
                </button>
                <button className="del-btn" onClick={() => deleteTask(index)}>X</button>
            </div>
        </div>
    )
}
export default Task;