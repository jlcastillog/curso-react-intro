import { ApiUI } from "./AppUI";
import { TodoPorvider } from "./components/TodoContext";

function App() {
  
  return (
    <TodoPorvider>
      <ApiUI/>
    </TodoPorvider>
  );
}

export default App;
