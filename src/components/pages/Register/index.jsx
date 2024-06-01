import React from "react";

import FormInput from "../../Input";
import "./style.css";

export default function Register() {
  const handleSubmit = () => {
    //
  };
  return (
    <div className="container">
      <div className="content">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <FormInput label="Pokemon name" />
        </form>
      </div>
    </div>
  );
}
