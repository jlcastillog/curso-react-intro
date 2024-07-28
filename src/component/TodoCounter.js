import "../css/TodoCounter.css";

export function TodoCounter({ nCompleted, totalCount }) {
  return (
    <h1 className="todoCounter">
      Has completado {nCompleted} de {totalCount} TODOS
    </h1>
  );
}
