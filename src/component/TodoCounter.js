import "../css/TodoCounter.css";

export function TodoCounter({ nCompleted, totalCount }) {
  return (
    <h1 className="todoCounter">
      Has completado <span>{nCompleted}</span> de <span>{totalCount}</span> TODOs
    </h1>
  );
}
