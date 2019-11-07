import React from "react";
import ControlItem from "./controlitem";
import initialState from "../global";
import useStorage from "./storage";

function Config(props) {
  const [config, setConfig] = useStorage(initialState);
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
