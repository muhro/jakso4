import React, { Component } from 'react';
import Kissat from './compoments/Kissat';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    kissat:[]
  };

  componentDidMount(){
    let url = 'http://media.mw.metropolia.fi/wbma/media/';
    axios.get(url)
       .then(res => this.setState({kissat: res.data}))
     //  .then( res => console.log(res.data))

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
