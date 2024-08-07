import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ApiUI } from "./AppUI";

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
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V1", []);
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
    <ApiUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      allCompleted={allCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      todos={todos}
      saveTodos={saveTodos}
      loading={loading}
      error={error}
    />
  );
}

export default App;
