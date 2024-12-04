import { useState, useEffect, useReducer } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { items, loading, error, synchronizedItem } = state;

  // ACTION CREATORS
  const onError = () => {
    dispatch({ type: actionTypes.error });
  };

  const onSuccess = (parsedItems) => {
    dispatch({ type: actionTypes.success, payload: parsedItems });
  };

  const onSave = (newItems) => {
    dispatch({ type: actionTypes.save, payload: newItems });
  };

  const onSynchronize = () => {
    dispatch({ type: actionTypes.synchronize });
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const parsedItems =
          JSON.parse(localStorage.getItem(itemName)) ?? initialValue;

        onSuccess(parsedItems);
      } catch (error) {
        onError();
      }
    }, 2000);
  }, [synchronizedItem]);

  const saveItems = (newItems) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      onSave(newItems);
    } catch (error) {
      onError();
    }
  };

  const synchronizeItems = () => {
    onSynchronize();
  };

  return {
    items,
    saveItems,
    loading,
    error,
    synchronizeItems,
  };
}

const initialState = ({ initialValue }) => ({
  items: initialValue,
  loading: true,
  error: false,
  synchronizedItem: true,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItem: true,
    items: payload,
  },
  [actionTypes.save]: {
    ...state,
    items: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    loading: true,
    synchronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
