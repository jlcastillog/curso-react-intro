import "../css/TodoCounter.css";

export function TodoCounter({ nCompleted, totalCount, allCompleted }) {
  console.log(allCompleted)
  return (
    <>
      {!allCompleted ? (
        <h1 className="todoCounter">
          Has completado <span>{nCompleted}</span> de <span>{totalCount}</span>{" "}
          TODOs
        </h1>
      ) : (
        <h1 className="todoCounter">Has completado todas las tareas</h1>
      )}
    </>
  );
}
