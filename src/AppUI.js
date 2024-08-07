import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

export function ApiUI({
  completedTodos,
  totalTodos,
  allCompleted,
  searchValue,
  setSearchValue,
  searchTodos,
  completeTodo,
  removeTodo,
  todos,
  saveTodos,
  loading,
  error,
}) {
  return (
    <>
      <header>
        <h1>TODO List</h1>
      </header>
      <main>
        <section className="searchSection">
          <TodoCounter
            nCompleted={completedTodos}
            totalCount={totalTodos}
            allCompleted={allCompleted}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </section>

        <section className="todoListSection">
          <TodoList allCompleted={allCompleted}>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Hubo un error!!</p>}
            {!loading && searchTodos.length === 0 && <p>Crea tu primer Todo</p>}

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
        </section>
      </main>
    </>
  );
}