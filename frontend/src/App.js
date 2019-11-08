import React, { Component } from "react";
import Config from "./components/config";
import ConfigJson from "./components/configjson";

function App() {
  const [checked, setChecked] = React.useState(false);

  function componentDidMount() {
    this.update();

    fetch("http://10.10.0.3:5000/config")
      .then(res => res.json())
      .then(data => {
        //this.setState(data);
      })
      .catch(console.log);
  }

  // update() {
  //   var key=0;
  //   try{key=this.state.key;}
  //   catch{}
  //   key++;
  //   this.setState({ key: key });
  //   console.log("update key "+key)
  // }

  console.log("render App ");

  const childElement = checked ? <ConfigJson storage="config" /> : null;

  return (
    <React.Fragment>
      <Config storage="config" />
      <ConfigJson storage="config" />
      <section>
        <label>Display React component?</label>
        <input
          id="showChild"
          type="checkbox"
          checked={checked}
          onChange={event => {
            setChecked(!checked);
          }}
        />
        {childElement}
      </section>
    </React.Fragment>
  );
}

export default App;
