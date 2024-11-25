import React from "react";
import { withStorageListener } from "./withStorageListener";
import "../css/ChangeAlert.css"

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <div className="ChangeAlert-bg">
          <div className="ChangeAlert-container">
            <p>Parece que hubo cambios en tus TODOs</p>
            <p>Debes sincronizar para continuar</p>
            <button className="TodoForm-button TodoForm-button--add" onClick={() => toggleShow()}>
              Aceptar
            </button>
          </div>
        </div>
      </>
    );
  }
  return null;
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
