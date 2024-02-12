import React, { useState, useEffect } from "react";

function Counter() {
  // State to hold the count
  const [count, setCount] = useState(0);

  // Function to handle count increment
  const handleIncrement = () => {
    setCount(count + 1);
    console.log("count increased")
  };
  
  const handleDecrement = () => {
    if (count <= 0) {
        alert('you cannot go below 0')
    }
    else setCount(count-1)
    console.log("count decreased")
  };

  // Logging lifecycle events
  useEffect(() => {
    console.log("Component mounted");
    // return () => {
    //   console.log("Component unmounted");
    // };
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Remove</button>
    </div>
  );
}

export default Counter;
