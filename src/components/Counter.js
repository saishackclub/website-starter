import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button onClick={() => setCount(count - 1)} className="counter-button">-</button>
      <span className="counter-value">{count}</span>
      <button onClick={() => setCount(count + 1)} className="counter-button">+</button>
    </div>
  );
}

export default Counter;
