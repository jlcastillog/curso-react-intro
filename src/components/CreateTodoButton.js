import "../css/CreateTodoButton.css";
import { TodoContext } from "../components/TodoContext";
import { useContext } from "react";

export function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <button
      title="Crear nueva tarea"
      type="button"
      className="createTodoButton"
      onClick={(event) => {
        setOpenModal(state => !state);
      }}
    ></button>
  );
}
