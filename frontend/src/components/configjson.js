import React, { useState } from "react";
import useStorage from "./storage";

function ConfigJson(props) {
  const [config, setConfig] = useStorage();

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
