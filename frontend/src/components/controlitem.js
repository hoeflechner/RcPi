import React from "react";
import LatchStore, { globalstore } from "./latchstore";
import initialstate from "../global";

function ControlItem(props) {
  //const { state, dispatch } = React.useContext(Store);
  const [config, setConfig] = LatchStore(React.useState(initialstate));
  //const [name, setName] = useState(state.config[props.id].Name);
  //const [axis, setAxis] = useState(state.config[props.id].Axis);

  function handleNameChange(e) {
    (config[props.id].Name = e.target.value);
    setConfig(config);
  }

  function handleAxisChange(e) {
    (config[props.id].Axis = e.target.value);
    setConfig(config);
  }

  console.log("render item " + props.id + " ");
  console.log(globalstore);
  return (
    <div>
      <input defaultValue={config[props.id].Name} onChange={handleNameChange} />
      <input defaultValue={config[props.id].Axis} onChange={handleAxisChange} />
    </div>
  );
}

export default ControlItem;
