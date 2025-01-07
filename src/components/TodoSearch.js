import { useEffect } from "react";
import "../css/TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue, loading, params, setParams }) {

  const onSearchChanged = (event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);

  return (
    <div className="todoSearch">
      <input
        placeholder="Sacar al perro a pasear"
        value={searchValue}
        onChange={onSearchChanged}
        disabled={loading}
      />
    </div>
  );
}
