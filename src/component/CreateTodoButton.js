import "../css/CreateTodoButton.css";

export function CreateTodoButton() {
  return (
    <button
      className="createTodoButton"
      onClick={(event) => {
        console.log("Le diste al boton de añadir todos");
        console.log(event);
        console.log(event.target);
      }}
    ></button>
  );
}
