import Todo from "./Todo";

function TodoList(props) {
  return (
    <main>
      <section class="task-list">
        <h2>Tasks</h2>
        <div id="tasks">
          {props.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                todo={todo}
                index={index}
                onDeleteTodo={props.onDeleteTodo}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default TodoList;
