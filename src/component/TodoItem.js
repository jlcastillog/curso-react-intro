import "../css/TodoItem.css"

export function TodoItem(props) {
  return (
    <li className="todoItem">
      <span className={props.completed ? "todoItemChecked" : "todoItemUnchecked"} ></span>
      <p className="textItem">{props.text}</p>
      <span className="removeItemButton"></span>
    </li>
  );
}
