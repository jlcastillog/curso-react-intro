import { useState, useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [synchronizedItem, setSynchronizedItem] = useState(true);

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
        setSynchronizedItem(true);
      }
    }, 2000);
  }, [synchronizedItem]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  const synchronizeItems = () => {
    setLoading(true);
    setSynchronizedItem(false);
  }

  return {
    items,
    saveItems,
    loading,
    error,
    synchronizeItems
  };
}
