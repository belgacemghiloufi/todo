import { useState } from "react";

function Header(props) {
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo != undefined && todo.length > 0) {
      props.onAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <header>
      <h1>React Todo App</h1>
      <form id="new-task-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="new-task-input"
          id="new-task-input"
          placeholder="What do you have planned?"
          value={todo}
          onChange={inputHandler}
        />
        <input id="new-task-submit" type="submit" value="Add Task" />
      </form>
    </header>
  );
}

export default Header;
