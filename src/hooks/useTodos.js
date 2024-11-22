import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodo() {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
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
    setSearchValue,
    searchTodos,
    completeTodo,
    removeTodo,
    todos,
    saveTodos,
    loading,
    error,
    openModal,
    setOpenModal,
    addTodo,
  };
}
