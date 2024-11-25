import "../css/TodoCounter.css";

export function TodoCounter({ completedTodos, totalTodos, allCompleted, loading }) {
  return (
    <>
      {!allCompleted ? (
        <h1 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </h1>
      ) : (
        <h1 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
          Has completado todas las tareas (<span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span>)
        </h1>
      )}
    </>
  );
}
