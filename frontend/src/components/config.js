import React from "react";
import ControlItem from "./controlitem";
import useStorage from "./storage";

const initialState = [
  {
    Axis: "X",
    Name: "throttle",
    Port: 1
  },
  {
    Axis: "Y",
    Name: "steering",
    Port: 2
  }
];

function Config(props) {
  const [config, setConfig] = useStorage(props.storage, initialState);
  console.log(config);
  return (
    <div>
      {config.map((c, index) => (
        <li key={index}>
          Control Item:
          <ControlItem id={index} storage={props.storage} />
        </li>
      ))}
    </div>
  );
}

export default Config;
