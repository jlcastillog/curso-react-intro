import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./components/TodoContext";
import { Modal } from "./components/Modal";
import { useContext } from "react";

export function ApiUI() {
  const {
    allCompleted,
    searchTodos,
    completeTodo,
    removeTodo,
    todos,
    saveTodos,
    loading,
    error,
    openModal
  } = useContext(TodoContext);
  return (
    <>
      <header>
        <h1>TODO List</h1>
      </header>
      <main>
        <section className="searchSection">
          <TodoCounter />
          <TodoSearch />
        </section>

        <section className="todoListSection">
          <TodoList allCompleted={allCompleted}>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchTodos.length === 0 && <EmptyTodos />}

            {searchTodos?.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onRemoveTodo={() => removeTodo(todo.text)}
                todos={todos}
                setTodos={saveTodos}
              />
            ))}
          </TodoList>

          <CreateTodoButton />

          {openModal && <Modal>La funcionalidad de crear TODOs</Modal>}
        </section>
      </main>
    </>
  );
}
