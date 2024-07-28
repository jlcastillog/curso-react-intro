import "../css/TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {
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
