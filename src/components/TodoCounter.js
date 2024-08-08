import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "../css/TodoCounter.css";

export function TodoCounter() {
  const { completedTodos, totalTodos, allCompleted } = useContext(TodoContext);

  return (
    <>
      {!allCompleted ? (
        <h1 className="todoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
          TODOs
        </h1>
      ) : (
        <h1 className="todoCounter">Has completado todas las tareas</h1>
      )}
    </>
  );
}
