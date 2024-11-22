import "../css/TodoList.css";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export function TodoList(props) {
  useEffect(() => {
    if (props.allCompleted) {
      confetti();
    }
  }, [props.allCompleted]);

  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && props.searchTodos.length === 0 && props.onEmptyTodos()}

      <ul className="todoList">{props.searchTodos?.map(props.render)}</ul>
    </>
  );
}
