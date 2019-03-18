import React, { Component } from 'react';
import KissaItem from './KissaItem';

class Kissat extends Component {
  render() {
    return this.props.kissat.map((kissa)=>(
    <KissaItem key={kissa.id} kissa={kissa}/>
    ));
  }
}

export default Kissat;
