import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {square: 0} }
  }
  componentDidMount() {
    fetch('http://10.10.0.3:5000/square/2')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data })
        console.log(this.state);
      })
      .catch(console.log);
      console.log(this.state);
  }
  render() {
    
    return (
      <div>
        <p>Data: {this.state.data.square} </p>
      </div>
    );
  }
}

export default App;
