import "../css/TodoForms.css";

export function TodoForms() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Escribe tu nuevo TODOS</label>
      <textarea placeholder="Sacar al perro" />
      <div className="TodoForm-buttonContainer">
        <button type="" className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}
