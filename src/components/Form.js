import React, { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');
    const [isActive, setActive] = useState("false");
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        if (name === '') {
            setActive("");
            e.preventDefault();
        } else {
            e.preventDefault();
            props.addTask(name);
            setName("");
            setActive("false");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="todo-input" className="label__lg">What need to be done?</label>
            </h2>
            <input
                type="text"
                id="todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange} />
            <span className={isActive ? "visually-hidden" : "text-red"}>Wrtite something!</span>
            <button
                type="submit"
                className="btn btn__primary btn__lg">Add</button>
        </form>
    );
}

export default Form;