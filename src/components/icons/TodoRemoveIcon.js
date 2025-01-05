import "../../css/TodoRemoveIcon.css";

export function TodoRemoveIcon({ onclick }) {
  return <span className="removeItemButton" onClick={onclick} title="Eliminar tarea"></span>;
}
