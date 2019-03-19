import React, { Component } from 'react';
import Kissat from './compoments/Kissat';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    kissat:[],
  };

  componentDidMount(){
    fetch( 'http://media.mw.metropolia.fi/wbma/media/').then((response) => {
      return response.json();
    }).then( (json) => {
      //console.log(json);
      json.map(item => {
        return fetch('http://media.mw.metropolia.fi/wbma/media/' + item.file_id).then(response => {
          return response.json();
        }).then(items => {
          console.log(items);
          this.setState({
            kissat: [...this.state.kissat, items]
          })
        });
      });
    });
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
