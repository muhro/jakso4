import React, { Component } from 'react';
import Kissat from './compoments/Kissat';
import './App.css';
import {getAllMedia} from './utils/MediaAPI';


class App extends Component {
  state = {
    kissat:[],
  };
  componentDidMount(){
  getAllMedia()
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

