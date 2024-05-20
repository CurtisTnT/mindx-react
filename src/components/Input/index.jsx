import React from "react";

export default function FormInput(props) {
  const { label, value, onValueChange } = props;

  return (
    <div className="modal-form-control">
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
}
