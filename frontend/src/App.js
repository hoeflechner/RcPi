import React, { Component } from "react";
import Config from "./components/config";
import ConfigJson from "./components/configjson";

function App() {
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

  return (
    <React.Fragment>
      <Config storage='config'/>
      <ConfigJson storage='config'/>
    </React.Fragment>
  );
}

export default App;
