import React, { Component } from 'react';
import KissaItem from './KissaItem';

class Kissat2 extends Component {
  render() {
    return this.props.kissat2.map((kissaId)=>(
        <KissaItem kissa={kissaId}/>
    ));
  }
}

export default Kissat2;
