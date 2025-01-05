import { useTodo } from "../../hooks/useTodos";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodosLoading } from "../../components/TodosLoading";
import { TodosError } from "../../components/TodosError";
import { EmptyTodos } from "../../components/EmptyTodos";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { TodoForms } from "../../components/TodoForms";
import { TodoHeader } from "../../components/TodoHeader";
import { TodoMain } from "../../components/TodoMain";
import { Modal } from "../../components/Modal";
import { ChangeAlertWithStorageListener } from "../../components/ChangeAlert";

function HomePage() {
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
                todos={todos}
                setTodos={saveTodos}
              />
            )}
          </TodoList>

          <CreateTodoButton setOpenModal={setOpenModal} />

          {openModal && (
            <Modal>
              <TodoForms setOpenModal={setOpenModal} addTodo={addTodo} />
            </Modal>
          )}
        </TodoMain>
      </main>
      <ChangeAlertWithStorageListener synchronize={synchronizeTodos} />
    </>
  );
}

export default HomePage;