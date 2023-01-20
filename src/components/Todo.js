function Todo(props) {
  const deleteHandler = () => {
    props.onDeleteTodo(props.index);
  };

  return (
    <div class="task">
      <div class="content">
        <input type="text" class="text" value={props.todo} readonly />
      </div>
      <div class="actions">
        <button class="delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
