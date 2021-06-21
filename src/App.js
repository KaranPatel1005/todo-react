import React from 'react';

function App() {
    return (
        <div>
            <h1>TodoMatic</h1>
            <form>
                <h2 className="">
                    <label htmlFor="" className="">What need to be done?</label>
                </h2>

                <input
                    type="text"
                    id="todo-input"
                    className=""
                    name="text"
                    autoComplete="off" />
                <span>Wrtite something!</span>
                <button
                    type="submit"
                    className="">Add</button>
            </form>
            <div className="">
                <button
                    type="button" className="" aria-pressed="true">
                    <span className>Show </span>
                    <span>all</span>
                    <span className> tasks</span>
                </button>
                <button>Active</button>
                <button>Completed</button>
            </div>

            <input type="radio"></input><span>Radio</span>
        </div>

    );
}

export default App;