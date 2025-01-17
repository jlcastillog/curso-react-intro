import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TodoForms.css";

export function TodoForms(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = useState(props.defaultTodoText || "");

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate("/");
  };

  const onCancel = (event) => {
    navigate("/");
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.title}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Sacar al perro"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {props.submitButtonText}
        </button>
      </div>
    </form>
  );
}
