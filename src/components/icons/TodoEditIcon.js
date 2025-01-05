import "../../css/TodoEditIcon.css";

export function TodoEditIcon({ onclick }) {
  return <span className="editItemButton" onClick={onclick}></span>;
}