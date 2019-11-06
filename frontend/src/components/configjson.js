import React, { useState } from "react";
import Store from "./store";
import initialState from "../global";

function ConfigJson(props) {
  const [config, setConfig] = Store(useState(initialState));

  console.log("render json");
  return (
    <div>
      <pre>
        {" "}
        <code> {JSON.stringify(config, null, 3)} </code>
      </pre>
    </div>
  );
}

export default ConfigJson;
