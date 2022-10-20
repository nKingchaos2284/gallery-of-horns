import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((animal, index) => {
      return <HornedBeast
        title={animal.title}
        image_url={animal.image_url}
        key={index}
        openModal={this.props.openModal}
      />
    });
    return (
      <>
        <main>
          <Container id='contain' fluid>
            
            <Row id='row' xs={1} sm={2} md={3} lg={4} xxl={5} className='g-4'>
              {beasts}
            </Row>
          </Container>
        </main>
      </>
    )
  }
}
export default Main;