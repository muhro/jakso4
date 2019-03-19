import React, {Component} from 'react'

export class KissaItem extends Component{
  tableStyle = () => {
    return {
      width: '80vw'
    }
  }
  divStyle = () => {
    return{
     borderBottom: '1px #ccc dotted',
      display: 'flex',
    }
  }
  text = () => {
    return{
      padding: '6px',
      maxHeight: '100%',
    }
  }
  imgStyle = () => {
    return{
    maxHeight: '100%',
    paddingRight: '20px'
    }
  }
  h3Style = () => {
    return{
      fontSize: '1rem',
      marigin: '0',
      textAlign: 'left',
    }
  }
  pStyle = () => {
    return{
      fontSize: '1rem',
      marigin: '0',
      textAlign: 'left',
    }
  }
  linkStyle = () => {
    return{
      paddingTop: '8%'

    }
  }


  render(){
    return(
   <table style={this.tableStyle()}>
      <div style={this.divStyle()}>
        <td>
             <img style={this.imgStyle()} src={this.props.kissa.filename} alt={this.props.kissa.alt}/>
        </td>
        <td style={this.text()}>
            <h3 style={this.h3Style()}>{this.props.kissa.title}</h3>
            <p style={this.pStyle()}>{this.props.kissa.description}</p>
        </td>
          <a style={this.linkStyle()} href={this.props.kissa.view}>View</a>
     </div>
   </table>
    )

  }
}
export default KissaItem