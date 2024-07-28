import { TodoCounter } from "./component/TodoCounter";
import { TodoSearch } from "./component/TodoSearch";
import { TodoList } from "./component/TodoList";
import { TodoItem } from "./component/TodoItem";
import { CreateTodoButton } from "./component/CreateTodoButton";
import { useState } from "react";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "Comprar pan", completed: false },
  { text: "Lavar ropa", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  return (
    <>
      <header>
        <h1>TODO List</h1>
      </header>
      <main>
        <section className="searchSection">
          <TodoCounter nCompleted={3} totalCount={12} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </section>

        <section className="todoListSection">
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
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
