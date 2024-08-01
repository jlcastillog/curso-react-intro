import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

/* const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Comprar pan", completed: false },
  { text: "Lavar ropa", completed: true },
];
const stringifyTodos = JSON.stringify(defaultTodos)
localStorage.setItem('TODOS_V1', stringifyTodos) */
// localStorage.removeItem('TODOS_V1')

function App() {
  const [todos, saveTodos] = useLocalStorage("TODO_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);

  const completedTodos = todos?.filter((todo) => !!todo.completed).length;
  const totalTodos = todos?.length;

  const searchTodos = todos?.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const removeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  if (completedTodos === totalTodos) {
    if (!allCompleted) {
      setAllCompleted(true);
    }
  }

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

export default App;
