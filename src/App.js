import React, { useState } from 'react';
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';
import Form from './components/Form';
import { nanoid } from 'nanoid';

function App(props) {
    const [tasks, setTasks] = useState(props.tasks);

    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    const tasklist = tasks.map(task =>
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            keys={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask} />);

    const tasksNoun = tasklist.length !== 1 ? 'tasks' : 'task';
    const headingText = tasklist.length === 0
        ? 'No Tasks'
        : `${tasklist.length} ${tasksNoun} remaining`;

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask} />
            <div className="filter btn-group stack-exception">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>
            <h2 id="list-heading">{headingText}</h2>
            <ul
                rol="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {tasklist}
            </ul>
        </div>

    );
}

export default App;