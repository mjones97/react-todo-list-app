import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    
    const handleAddButton = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
            }
        };

    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleAddButton}>
                Add Task
                </button>
            </div>
            <ul className="list-group">
                {tasks.map((task, index) => (
                <li className="list-group-item text-black" key={index}>
                    {task}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;