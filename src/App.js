import "./App.css";
import { TodoCounter } from "./component/TodoCounter";
import { TodoSearch } from "./component/TodoSearch";
import { TodoList } from "./component/TodoList";
import { TodoItem } from "./component/TodoItem";
import { CreateTodoButton } from "./component/CreateTodoButton";

function App() {
  return (
    <div className="App">

      <TodoCounter nCompleted={3} totalCount={12}/>
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
