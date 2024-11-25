import React from "react";

export function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [isStorageSchanged, setIsStorageChanged] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODO_V1") {
        setIsStorageChanged(true);
      }
    });

    const toggleShow = () => {
      props.synchronize();
      setIsStorageChanged(false);
    };

    return (
      <WrappedComponent show={isStorageSchanged} toggleShow={toggleShow} />
    );
  };
}
