
import { useParams } from "react-router-dom";
import "../css/TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue, loading, onSearchChanged }) {

  const { search } = useParams();

  if (search && search !== searchValue) {
    setSearchValue(search);
    onSearchChanged(search);
  }

  return (
    <div className="todoSearch">
      <input
        placeholder="Sacar al perro a pasear"
        value={searchValue}
        onChange={(event) => {
          const newSearchValue = event.target.value;
          setSearchValue(newSearchValue);
          onSearchChanged(newSearchValue);
        }}
        disabled={loading}
      />
    </div>
  );
}
