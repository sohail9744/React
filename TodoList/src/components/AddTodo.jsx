import { useState } from "react";
import "../css/AddTodo.css";
import TodoList from "./ListTodo";

const AddTodoList = () => {
  const [tasks, setTasks] = useState([]);

  const onSubmit = () => {
    const taskName = document.getElementById("addTask").value;
    const taskDesc = document.getElementById("addDesc").value;
    if (taskName && taskDesc) {
      const newTask = {
        id: tasks.length + 1,
        taskName: taskName,
        taskDesc: taskDesc,
        status: false
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);

      // Clear input fields
      document.getElementById("addTask").value = "";
      document.getElementById("addDesc").value = "";
    } else{
      alert("Please enter the Task");
    }
  };

  return (
    <>
      <form className="formclass">
        <h3
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Add Task
        </h3>

        <label htmlFor="tkName">Task Name</label>
        <input
          name="tkName"
          id="addTask"
          type="text"
          placeholder="Enter your Task Name"
        />

        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          cols="15"
          id="addDesc"
          rows="5"
          placeholder="Enter Description...."
        ></textarea>

        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
      <TodoList tasks={tasks} />
    </>
  );
};

export default AddTodoList;
