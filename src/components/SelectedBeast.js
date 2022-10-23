import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
      alt: '',
      src: '',

    }
  }

  handleClose = () => {
    this.setState(() => ({ show: false }), this.props.onCloseModal)

  }

  componentDidUpdate() {
    if (this.props.show && !this.state.show) {
      this.setState({ show: true });
    }

    if (this.props.showBeast[0].title !== this.state.alt) {
      this.setState({
        title: this.props.showBeast[0].title,
        src: this.props.showBeast[0].image_url,
        alt: this.props.showBeast[0].title
      })

    }

  }



  render() {

    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Card.Img variant="top" alt={this.state.title} src={this.state.src} /></Modal.Body>

      </Modal>
    )
  }
}