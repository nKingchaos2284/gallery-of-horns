import React from "react";
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render(){
    return(
      <Modal
      size="lg"
        id='modal'
        show={this.props.show}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='modalTitle'>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.img} id='modalImg' alt=''/>
          <Button variant="outline-info" onClick={this.props.onHide}>
          close
          </Button>
          </Modal.Body>
      </Modal>
    )
  }
};
export default SelectedBeast