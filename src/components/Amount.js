import React from "react";

export const Amount = ({ error, value, onChange }) => {
  const errorClass = error ? "has-error" : "";
  return (
    <label className={errorClass}>
      <div className="label">Monto:</div>
      <input
        type="text"
        placeholder="Ingrese un monto"
        value={value}
        onChange={onChange}
      />
      {error && <div className="error-hint">{error}</div>}
    </label>
  );
};
