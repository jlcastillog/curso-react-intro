import "../css/CreateTodoButton.css";

export function CreateTodoButton(props) {
  return (
    <button
      title="Crear nueva tarea"
      type="button"
      className="createTodoButton"
      onClick={props.onclick}
    ></button>
  );
}
