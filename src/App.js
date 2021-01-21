import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import "./index.css";

function App() {
    const counter = useSelector((state) => state.counter);
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className='App'>
            <h1>Counter {counter}</h1>
            <div className='button-container'>
                <button onClick={() => dispatch(increment(3))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            {isLogged ? <h3>Valuable Information</h3> : <h3>Not logged</h3>}
        </div>
    );
}

export default App;
