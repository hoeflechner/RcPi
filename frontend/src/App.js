import React, { Component } from 'react';
import Config from './components/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { config: []} 
  }
  componentDidMount() {
    fetch('http://10.10.0.3:5000/config')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState(data)
        console.log(this.state);
      })
      .catch(console.log);
      console.log(this.state);
  }
  render() {
    console.log(this.state);
    return (
      <Config config={this.state.config} /> 
    );
  }
}

export default App;
