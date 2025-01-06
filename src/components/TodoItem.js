import { TodoCheckIcon } from "./icons/TodoCheckIcon";
import { TodoRemoveIcon } from "./icons/TodoRemoveIcon";
import { TodoEditIcon } from "./icons/TodoEditIcon";
import "../css/TodoItem.css";

export function TodoItem(props) {
  return (
    <li className="todoItem">
      <TodoCheckIcon checked={props.completed} onclick={props.onComplete} />
      <p className={`textItem ${props.completed ? "textItemCompleted" : ""}`}>
        {props.text}
      </p>
      <div className="rightButtons">
        <TodoEditIcon onclick={props.onEdit} />
        <TodoRemoveIcon onclick={props.onRemoveTodo} />
      </div>
    </li>
  );
}
