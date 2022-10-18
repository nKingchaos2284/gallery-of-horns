import React from "react";

class HornedBeast extends React.Component{
  render(){
    return(
      <article>
        <h3>{this.props.title}</h3>
        <img 
        title = {this.props.title}
        src ={this.props.imgUrl} 
        alt= {this.props.description}
        >
          </img>
          <p>{this.props.description}</p>
      </article>
    )
  }
}
export default HornedBeast; 