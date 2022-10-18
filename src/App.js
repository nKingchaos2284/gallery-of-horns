// imports
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// class component
class App extends React.Component{
  render(){
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}

// export
export default App;