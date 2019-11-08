import React from "react";
import useStorage from "./storage";

function ControlItem(props) {
  const [config, setConfig] = useStorage(props.storage);

  function handleNameChange(e) {
    config[props.id].Name = e.target.value;
    setConfig(config);
  }

  function handleAxisChange(e) {
    config[props.id].Axis = e.target.value;
    setConfig(config);
  }

  console.log("render item " + props.id + " ");
  console.log(config);
  return (
    <div>
      <input
        defaultValue={config[props.id].Name}
        onChange={handleNameChange}
      />
      <input
        defaultValue={config[props.id].Axis}
        onChange={handleAxisChange}
      />
    </div>
  );
}

export default ControlItem;
