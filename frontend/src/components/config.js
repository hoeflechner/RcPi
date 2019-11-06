import React from "react";
import ControlItem from "./controlitem";
import initialstate from "../global";
import LatchStore from "./latchstore";

function Config(props) {
  const [config, setConfig] = LatchStore(React.useState(initialstate));
  console.log(config);
  return (
    <div>
      {config.map((c, index) => (
        <li key={index}>
          Control Item:
          <ControlItem id={index} />
        </li>
      ))}
    </div>
  );
}

export default Config;
