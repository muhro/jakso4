import React, { Component } from 'react';
import Kissat from './compoments/Kissat';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    kissat:[]
  }

  componentDidMount(){
    axios.get('./test.json')
        .then(res => this.setState({kissat: res.data}))
  }

  render() {
    return (
      <div className="App">
      <Kissat kissat={this.state.kissat}/>

      </div>
    );
  }
}

export default App;
