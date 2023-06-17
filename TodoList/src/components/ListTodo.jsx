import "../css/ListTodo.css";

const TodoList = (props) => {
  const handleCheck = (ev, status, key) => {
    if (status) {
      const updatedTasks = props.tasks.map((taskData) => {
        if (taskData.id === key) {
          taskData.status = true;
        } else {
          taskData.status = false;
        }
      });
      return updatedTasks;
    }
  };
  return (
    <>
      <form className="app-renderList">
        <h3
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Render List
        </h3>

        <ol>
          {props.tasks.map((el) => (
            <li key={el.id}>
              <div>
                <strong>Task Name:</strong> {`${el.taskName} `}
              </div>
              <div>
                <strong>Task Description:</strong> {`${el.taskDesc}`}
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <strong>Status</strong>
                <input
                  name="checkBoxInput"
                  type="checkbox"
                  key={el.id}
                  onChange={(ev) => {
                    handleCheck(ev, ev.target.checked, el.id);
                  }}
                />
                {el.status && <span>Completed</span>}
              </div>
            </li>
          ))}
        </ol>
      </form>
    </>
  );
};
export default TodoList;
