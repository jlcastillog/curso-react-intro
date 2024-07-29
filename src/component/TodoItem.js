import "../css/TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="todoItem">
      <span
        className={props.completed ? "todoItemChecked" : "todoItemUnchecked"}
        onClick={props.onComplete}
      ></span>
      <p className={`textItem ${props.completed ? "textItemCompleted" : ""}`}>
        {props.text}
      </p>
      <span
        className="removeItemButton"
        onClick={props.onRemoveTodo}
      ></span>
    </li>
  );
}
