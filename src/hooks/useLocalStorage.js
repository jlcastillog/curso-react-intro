import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const parsedItems =
          JSON.parse(localStorage.getItem(itemName)) ?? initialValue;
        setItems(parsedItems);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}
