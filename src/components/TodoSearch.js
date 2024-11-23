import "../css/TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <div className="todoSearch">
      <input
        placeholder="Sacar al perro a pasear"
        value={searchValue}
        onChange={(event) => {
          const newSearchValue = event.target.value;
          setSearchValue(newSearchValue);
        }}
        disabled={loading}
      />
    </div>
  );
}
