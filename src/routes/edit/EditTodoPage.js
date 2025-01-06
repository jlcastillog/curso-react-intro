import { useLocation, useParams } from "react-router-dom";
import { useTodo } from "../../hooks/useTodos";
import { TodoForms } from "../../components/TodoForms";
import { TodosLoading } from "../../components/TodosLoading";
import "../../css/EditTodoPage.css";

function EditTodoPage() {
  const { loading, editTodo, getTodo } = useTodo();
  const { id } = useParams();
  const location = useLocation();

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return (
      <section className="todoLoading">
        <TodosLoading />
      </section>
    );
  } else {
    todoText = getTodo(id)?.text;
  }

  return (
    <TodoForms
      submitEvent={(newText) => editTodo(id, newText)}
      defaultTodoText={todoText}
      title="Edita tu TODOS"
      submitButtonText="Editar"
    />
  );
}

export default EditTodoPage;
