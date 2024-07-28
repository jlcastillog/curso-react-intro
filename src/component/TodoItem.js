import "../css/TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="todoItem">
      <span
        className={props.completed ? "todoItemChecked" : "todoItemUnchecked"}
      ></span>
      <p className={`textItem ${props.completed ? "textItemCompleted" : ""}`}>
        {props.text}
      </p>
      <span
        className="removeItemButton"
        onClick={() => {
          const currentTodosClone = [...props.todos];
          const index = currentTodosClone.findIndex(
            (todo) => todo.text === props.text
          );
          currentTodosClone.splice(index, 1);
          props.setTodos(currentTodosClone);
        }}
      ></span>
    </li>
  );
}
