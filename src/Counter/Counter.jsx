import React, { useState } from 'react';
import './Counter.css';

const Counter = ()=>{
    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    function addFunction(params) {
        setCounterValue(counterValue+inputValue)
    }

    function substrFunction(params) {
        setCounterValue(counterValue-inputValue)
    }
    return (
        <div className="text-center">
        <h3 data-testid="header">Counter Component</h3>
        <h2 data-testid="counter" className={counterValue>100 ? "green"  : counterValue<0 ? "red" : ""}>
            {counterValue}
        </h2>
        <button data-testid="substr-btn" onClick={substrFunction}>-</button>
        <input data-testid="input" value={inputValue} type="number" className="text-center" onChange={(e)=>setInputValue(parseInt(e.target.value))}/>
        <button data-testid="add-btn" onClick={addFunction}>+</button>
        </div>
    )
}
export default Counter