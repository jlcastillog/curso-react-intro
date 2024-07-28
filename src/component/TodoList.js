import "../css/TodoList.css"

export function TodoList(props) {
  return <ul className="todoList">{props.children}</ul>;
}
