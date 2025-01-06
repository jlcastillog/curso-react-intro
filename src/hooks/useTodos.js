import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodo() {
  const {
    items: todos,
    saveItems: saveTodos,
    synchronizeItems: synchronizeTodos,
    loading,
    error
  } = useLocalStorage("TODO_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);

  const completedTodos = todos?.filter((todo) => !!todo.completed).length;
  const totalTodos = todos?.length;

  const searchTodos = todos?.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const getTodo = (id) => {  
    const index = todos.findIndex((todo) => todo.id === id);
    return todos[index]
  }

  
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: Date.now().toString(),
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  
  const completeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].text = newText;
    saveTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  if (completedTodos === totalTodos) {
    if (!allCompleted && totalTodos !== 0) {
      setAllCompleted(true);
    }
  }

  return {
    completedTodos,
    totalTodos,
    allCompleted,
    searchValue,
    searchTodos,
    todos,
    loading,
    error,
    setSearchValue,
    completeTodo,
    removeTodo,
    saveTodos,
    addTodo,
    synchronizeTodos,
    editTodo,
    getTodo
  };
}
