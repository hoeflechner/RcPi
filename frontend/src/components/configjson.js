import React, { useState } from "react";
import useGlobalState from "./globalState";

function ConfigJson(props) {
  const [config, setConfig] = useGlobalState(props.storage);

  //console.log("render json");
  return (
    <div>
      <pre>
        <code> {JSON.stringify(config, null, 3)} </code>
      </pre>
    </div>
  );
}

export default ConfigJson;
