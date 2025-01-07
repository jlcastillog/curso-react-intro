import { useNavigate } from "react-router-dom";
import { useTodo } from "../../hooks/useTodos";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodosLoading } from "../../components/TodosLoading";
import { TodosError } from "../../components/TodosError";
import { EmptyTodos } from "../../components/EmptyTodos";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoMain } from "../../components/TodoMain";
import { ChangeAlertWithStorageListener } from "../../components/ChangeAlert";

function HomePage() {
  const navigate = useNavigate();
  const {
    allCompleted,
    searchTodos,
    todos,
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    completeTodo,
    removeTodo,
    saveTodos,
    setSearchValue,
    synchronizeTodos,
  } = useTodo();

  return (
    <>
      <main>
        <TodoHeader loading={loading}>
          <TodoCounter
            allCompleted={allCompleted}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearchChanged={(search) => navigate(`/${search}`)}
          />
        </TodoHeader>

        <TodoMain>
          <TodoList
            error={error}
            loading={loading}
            searchTodos={searchTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <EmptyTodos />}
            onEmptySearchResults={(searchText) => (
              <p>No hay resultados para "{searchText}"</p>
            )}
          >
            {(todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.id)}
                onRemoveTodo={() => removeTodo(todo.id)}
                onEdit={() => navigate(`/edit/${todo.id}`, { state: { todo } })}
                todos={todos}
                setTodos={saveTodos}
              />
            )}
          </TodoList>

          {!loading && !error && (
            <CreateTodoButton onclick={() => navigate("/new")} />
          )}
        </TodoMain>
      </main>
      <ChangeAlertWithStorageListener synchronize={synchronizeTodos} />
    </>
  );
}

export default HomePage;
