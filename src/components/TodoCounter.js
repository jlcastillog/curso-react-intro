import "../css/TodoCounter.css";

export function TodoCounter({ completedTodos, totalTodos, allCompleted }) {
  return (
    <>
      {!allCompleted ? (
        <h1 className="todoCounter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </h1>
      ) : (
        <h1 className="todoCounter">
          Has completado todas las tareas (<span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span>)
        </h1>
      )}
    </>
  );
}
