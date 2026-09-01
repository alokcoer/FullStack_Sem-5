import { useState } from 'react';

export default function TodoList() {
    const [taskList, setTaskList] = useState([]);
    const [currentTaskInput, setCurrentTaskInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        const sanitizedInput = currentTaskInput.trim();
        if (!sanitizedInput) return;

        const newTask = {
            taskId: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            taskName: sanitizedInput
        };
        
        setTaskList((prev) => [...prev, newTask]);
        setCurrentTaskInput('');
    };

    const handleRemoveTask = (taskIdToRemove) => {
        setTaskList((prev) => prev.filter((task) => task.taskId !== taskIdToRemove));
    };

    return (
        <section className="component-container">
            <h2>Todo List</h2>
            <form onSubmit={handleAddTask} className="input-group">
                <input
                    type="text"
                    value={currentTaskInput}
                    onChange={(e) => setCurrentTaskInput(e.target.value)}
                    placeholder="Enter task item"
                    aria-label="New task input"
                />
                <button type="submit">Add</button>
            </form>
            <ul className="item-list">
                {taskList.map((task) => (
                    <li key={task.taskId} className="list-item">
                        <span>{task.taskName}</span>
                        <button 
                            onClick={() => handleRemoveTask(task.taskId)} 
                            className="danger-btn"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}