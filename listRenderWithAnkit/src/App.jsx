import { useState } from "react";
const ListRenderAdd = () => {
  const [names, setNames] = useState(["abhinav", "ajit", "sachin", "vishal"]);
  //storing input values in string
  const [newName, setNewName] = useState("");

  const onAddNewName = () => {
    // Prepend Example
    setNames((prevState) => [newName, ...prevState]);
    // Append Example
    //setNames((prevState) => [ ...prevState, newName]);
    setNewName("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={onAddNewName}>Add</button>
      </div>
      <ul style={{ background: !newName ? "green" : newName }}>
        {names.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRenderAdd;
