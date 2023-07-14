import { useState } from "react";

const ConditionalRenderingV1 = () => {
  const [isActive, setIsActive] = useState(true);
  const [value, setValue] = useState("");

  return (
    <div>
      <button onClick={() => setIsActive((prevState) => !prevState)}>
        Toggle
      </button>
      <p>You are {isActive ? "Active" : "Not Active"}</p>

      {isActive && (
        <h1>
          <strong>Hello World</strong>
        </h1>
      )}
      <div>
        <input type="text" onChange={(ev) => setValue(ev.target.value)} />
        <p>{value ? value : "Please enter the value in input field"}</p>
        
      </div>
    </div>
  );
};

export default ConditionalRenderingV1;
