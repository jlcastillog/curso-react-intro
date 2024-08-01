import { TodoCounter } from "./component/TodoCounter";
import { TodoSearch } from "./component/TodoSearch";
import { TodoList } from "./component/TodoList";
import { TodoItem } from "./component/TodoItem";
import { CreateTodoButton } from "./component/CreateTodoButton";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

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
  const parsedTodos = JSON.parse(localStorage.getItem("TODOS_V1")) ?? [];

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);

  const completedTodos = todos?.filter((todo) => !!todo.completed).length;
  const totalTodos = todos?.length;

  const searchTodos = todos?.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.set("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

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
