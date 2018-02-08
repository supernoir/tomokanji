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
      <div key={1} className="card">
        <div className="card-head">
          <div className="card-kunyomi">
            <p className="card-reading-type">訓読み</p>
            <p className="card-reading-content">ふゆ</p>
          </div>
          <div className="card-onyomi">
            <p className="card-reading-type">音読み</p>
            <p className="card-reading-content">とう</p>
          </div>
        </div>
        <div className="card-body">
          <div className="card-kanji">
            <h1 className="card-kanji-content">冬</h1>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-meaning">Winter</div>
          <div className="card-details">Grade 2 "Kyōiku" kanji</div>
        </div>
      </div>
    )
  }
}
