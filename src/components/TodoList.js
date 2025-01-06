import { useEffect } from "react";
import confetti from "canvas-confetti";
import "../css/TodoList.css";

export function TodoList(props) {
  const renderFunc = props.children || props.render;

  useEffect(() => {
    if (props.allCompleted) {
      confetti();
    }
  }, [props.allCompleted]);

  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!props.loading &&
        !!props.totalTodos &&
        !props.searchTodos.length &&
        props.onEmptySearchResults(props.searchText)}
      {!props.loading && !props.error && (
        <ul className="todoList">{props.searchTodos?.map(renderFunc)}</ul>
      )}
    </>
  );
}
