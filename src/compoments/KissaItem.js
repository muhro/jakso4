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
    maxHeight: '6rem',
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
    let link = "http://media.mw.metropolia.fi/wbma/uploads/"
    return(
   <table style={this.tableStyle()}>
      <div style={this.divStyle()}>
        <td>
             <img style={this.imgStyle()} src={link + this.props.kissa.thumbnails.w160} alt={this.props.kissa.alt}/>
        </td>
        <td style={this.text()}>
            <h3 style={this.h3Style()}>{this.props.kissa.title}</h3>
            <p style={this.pStyle()}>{'Lataajan ID: ' + this.props.kissa.user_id}</p>
        </td>
     </div>
   </table>
    )

  }
}
export default KissaItem