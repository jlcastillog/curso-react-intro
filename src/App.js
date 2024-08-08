import { ApiUI } from "./AppUI";
import { TodoPorvider } from "./components/TodoContext";

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
  
  return (
    <TodoPorvider>
      <ApiUI/>
    </TodoPorvider>
  );
}

export default App;
