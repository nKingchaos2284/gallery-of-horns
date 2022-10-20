import React from "react";
import './HornedBeasts.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: '',
      favnum: 0,
      favstop: '',
    };
  };
  handlefavs = (event) => {
    let stop = document.querySelector(`[alt='${event.target.alt}']`)
    this.state.favnum !== 10? this.setState({
      favs: this.state.favs + '❤️',
      favnum: this.state.favnum + 1,
    })

    : this.setState({
     favstop: 'Only 10 hearts allowed',
    })
  
    
  }
  handleNameClick = () => {
    this.props.openModal(this.props.title, this.props.image_url)
  }
  render() {
    
    return (
      <article>
        <Col>
        <Card>
          <Card.Img variant="top"
            title={this.props.title}
            src={this.props.image_url}
            alt={this.props.title}
            id={this.props._id}
            />
            <Card.Body>
            <Button variant="outline-success" onClick={this.state.favstop ?()=>{} : this.handlefavs} >Number of ❤️ = favs:{this.state.favs}
            </Button>
            <p>{this.state.favstop}</p>
           <Card.Title><h3> {this.props.title}</h3></Card.Title>
          <p>{this.props.description}</p>
          <Button variant="outline-info" onClick={this.handleNameClick}>Learn More
            </Button>
          </Card.Body>
        </Card>
        </Col>
      </article>
    )
  }
}
export default HornedBeast; 