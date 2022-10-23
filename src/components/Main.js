import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      alt: ''
    }
  }
  whichClickedHandle = (alt) => {
    this.setState({ alt: alt.alt }, () => {
      if (this.state.alt) {
        this.props.changeShow(this.state.alt)
      }
    })
  }

  render() {

    return (

      <main>
        {this.props.data.map((hornedBeastData) => {

          return <HornedBeast onWhichClicked={this.whichClickedHandle} key={hornedBeastData._id} data={hornedBeastData} />

        }).filter((items) => {
          if (!this.props.numberOfHorns.selection) {
            return items;
          }
          return Number(this.props.numberOfHorns.selection) === items.props.data.horns
        })}

      </main>)
  }
}