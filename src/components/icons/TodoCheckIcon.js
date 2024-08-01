import "../../css/TodoCheckIcon.css"

export function TodoCheckIcon({ checked , onclick}) {
  return (
    <span
      className={checked ? "todoItemChecked" : "todoItemUnchecked"}
      onClick={onclick}
    ></span>
  );
}
