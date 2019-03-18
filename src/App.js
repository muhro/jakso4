import React, { Component } from 'react';
import Kissat from './compoments/Kissat';

import './App.css';

class App extends Component {
  state = {
    kissat:[
      {
        id: 1,
        title: 'Kissa 1',
        src: 'https://placekitten.com/160/160',
        alt: 'kissa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        view: 'https://placekitten.com/160/160'
      },
      {
        id: 2,
        title: 'Kissa 2',
        src: 'https://placekitten.com/160/160',
        alt: 'kissa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        view: 'https://placekitten.com/160/160'
      },
      {
        id: 3,
        title: 'Kissa 3',
        src: 'https://placekitten.com/160/160',
        alt: 'kissa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        view: 'https://placekitten.com/160/160'
      }
    ]
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
