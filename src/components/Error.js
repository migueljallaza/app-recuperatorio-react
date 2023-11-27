import React from "react";

export const Error = ({ message }) => {
  const defaultMessage = "Algo salio mal, intentelo mas tarde";
  return <div className="error">{`Oops! ${message || defaultMessage}`}</div>;
}
