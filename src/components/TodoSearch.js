import { useContext } from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "./TodoContext";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <div className="todoSearch">
      <input
        placeholder="Sacar al perro a pasear"
        value={searchValue}
        onChange={(event) => {
          const newSearchValue = event.target.value;
          setSearchValue(newSearchValue);
        }}
      />
    </div>
  );
}
