import "../css/CreateTodoButton.css";

export function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      title="Crear nueva tarea"
      type="button"
      className="createTodoButton"
      onClick={(event) => {
        setOpenModal((state) => !state);
      }}
    ></button>
  );
}
