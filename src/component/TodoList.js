import "../css/TodoList.css";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export function TodoList(props) {
  useEffect(() => {
    if (props.allCompleted) {
      confetti();
    }
  }, [props.allCompleted]);

  return <ul className="todoList">{props.children}</ul>;
}
