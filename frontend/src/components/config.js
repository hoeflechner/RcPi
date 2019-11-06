import React from "react";
import ControlItem from "./controlitem";
import Global from "../global";
import { Store } from "./store";

function Config(props) {
  const { state, dispatch } = React.useContext(Store);
  return (
    <div>
      {state.config.map((c, index) => (
        <li key={index}>
          Control Item:
          <ControlItem id={index} />
        </li>
      ))}
    </div>
  );
}

export default Config;
