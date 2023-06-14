import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const storeValue = () => {
    setCount(uuidv4());
  };
  return (
    <>
      <div className="wrap-class">
        <button onClick={storeValue}>Click to Generate ID!</button>
      </div>
      <p>
        <strong>Random Id:</strong> {count}
      </p>
    </>
  );
}

export default App;
