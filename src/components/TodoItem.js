import "../css/TodoItem.css";
import { TodoCheckIcon } from "./icons/TodoCheckIcon";
import { TodoRemoveIcon } from "./icons/TodoRemoveIcon";

export function TodoItem(props) {
  return (
    <li className="todoItem">
      <TodoCheckIcon checked={props.completed} onclick={props.onComplete} />
      <p className={`textItem ${props.completed ? "textItemCompleted" : ""}`}>
        {props.text}
      </p>
      <TodoRemoveIcon onclick={props.onRemoveTodo} />
    </li>
  );
}
