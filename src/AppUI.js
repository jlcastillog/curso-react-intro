import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos } from "./components/EmptyTodos";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./components/TodoContext";
import { TodoForms } from "./components/TodoForms";
import { TodoHeader } from "./components/TodoHeader";
import { TodoMain } from "./components/TodoMain";
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
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
  } = useContext(TodoContext);
  return (
    <>
      <header>
        <span></span>
        <h1>Planify Web App</h1>
      </header>
      <main>
        <TodoHeader>
          <TodoCounter
            allCompleted={allCompleted}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>

        <TodoMain>
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

          <CreateTodoButton setOpenModal={setOpenModal} />

          {openModal && (
            <Modal>
              <TodoForms setOpenModal={setOpenModal} addTodo={addTodo} />
            </Modal>
          )}
        </TodoMain>
      </main>
    </>
  );
}
