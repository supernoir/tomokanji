import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      cardData: this.props.data,
      currentId: 0,
      currentData: this.props.data
    }
    this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ counter: 2 })
  }

  render() {
    return (
      <div className="card">
        <div key={1} className="card_body">
          <div className="card-kunyomi">Kun</div>
          <div className="card-onyomi">On</div>
          <div className="card-kanji">Kanji</div>
          <div className="card-romanization">Romaji</div>
          <div className="card-meaning">Meaning</div>
          <div className="card-details">Details</div>
        </div>
      </div>
    )
  }
}
