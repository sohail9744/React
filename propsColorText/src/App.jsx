import { useState } from "react";
import ChangeColor from "./ChildComponent";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <button onClick={() => setColor("green")}>Green color</button>
      <button onClick={() => setColor("red")}>Red color</button>
      <button onClick={() => setColor("blue")}>Blue color</button>
      <hr />
      <ChangeColor colorName={color}></ChangeColor>
    </>
  );
}

export default App;