import React from "react";

export function TodoHeader({ children, loading }) {
  return (
    <section className="searchSection">
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading: loading })
      )}
    </section>
  );
}
