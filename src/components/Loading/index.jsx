import React from "react";

import "./style.css"
import Loader from "./Loader";

export default function Loading() {
  return (
    <div className="overlay">
      <Loader />
    </div>
  );
}
