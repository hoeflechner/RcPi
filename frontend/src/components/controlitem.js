import React from "react";
import Store from "./store";
import initialState from "../global";

function ControlItem(props) {
  const [config, setConfig] = Store(React.useState(initialState));

  function handleNameChange(e) {
    (config[props.id].Name = e.target.value);
    setConfig(config);
  }

  function handleAxisChange(e) {
    (config[props.id].Axis = e.target.value);
    setConfig(config);
  }

  console.log("render item " + props.id + " ");
  //console.log(globalstore);
  return (
    <div>
      <input defaultValue={config[props.id].Name} onChange={handleNameChange} />
      <input defaultValue={config[props.id].Axis} onChange={handleAxisChange} />
    </div>
  );
}

export default ControlItem;
