import React, { Component } from 'react';
import Config from './components/config';
import Global from './global';

Global.Config = [{
  "Axis": "X",
  "Name": "throttle",
  "Port": 1
},
{
  "Axis": "Y",
  "Name": "steering",
  "Port": 2
}
];

class App extends Component {

  componentDidMount() {
    fetch('http://10.10.0.3:5000/config')
      .then(res => res.json())
      .then((data) => {

        //this.setState(data);
        Global.Config = data;

      })
      .catch(console.log);

  }
  render() {
    console.log(Global.Config);
    return (
      <Config />
    );
  }
}

export default App;
