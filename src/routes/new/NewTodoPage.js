import { TodoForms } from "../../components/TodoForms";
import { useTodo } from "../../hooks/useTodos";

function NewTodoPage() {
  const {addTodo} = useTodo();

  return (
    <TodoForms
      submitEvent={(newText) => addTodo(newText)}
      title="Escribe tu nuevo TODOS"
      submitButtonText="Añadir"
    />
  );
}

export default NewTodoPage;
