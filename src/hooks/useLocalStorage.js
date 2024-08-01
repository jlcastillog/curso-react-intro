import { useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const parsedItems =
    JSON.parse(localStorage.getItem(itemName)) ?? initialValue;

  const [items, setItems] = useState(parsedItems);

  const saveItems = (newItems) => {
    localStorage.set(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return [items, saveItems];
}
