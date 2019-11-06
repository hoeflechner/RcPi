import React, { useState } from "react";
import LatchStore from "./latchstore";
import initialstate from "../global";

function ConfigJson(props) {
  const [config, setConfig] = LatchStore(React.useState(initialstate));

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
