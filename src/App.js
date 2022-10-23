import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styles from './App.module.css'
import data from './data.json'
import SelectedBeast from './components/SelectedBeast'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      alt: '',
      selection: ''
    }
  }
  changeShow = (alt) => {
    this.setState({
      show: true,
      alt: alt
    })
  }

  changeClose = () => {
    this.setState({
      show: false,
    })
  }


  filterChange = (selection) => {
    this.setState({
      selection: selection,
      alt: data[0].title,
      title: data[0].title
    })
  }



  render() {

    return (
      <>
        <Header onSelectFilter={this.filterChange} />
        <SelectedBeast onCloseModal={this.changeClose} showBeast={data.filter(item => item.title === this.state.alt)} show={this.state.show} data={data} />
        <Main numberOfHorns={this.state.selection} changeShow={this.changeShow} className={styles.main} data={data} />

        <Footer className={styles['page-footer']} />
      </>
    )
  }
}