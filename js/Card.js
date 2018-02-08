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
          <div className="card-kunyomi">
            <p className="card-reading-type">訓読み</p>
            <p className="card-reading-content">ふゆ</p>
          </div>
          <div className="card-onyomi">
            <p className="card-reading-type">音読み</p>
            <p className="card-reading-content">とう</p>
          </div>
          <div className="card-kanji">
            <h1 className="card-kanji-content">冬</h1>
          </div>
          <div className="card-romanization">
            <p className="card-romanization-onyomi">
              <span className="label-onyomi">ON</span> tō
            </p>
            <p className="card-romanization-kunyomi">
              <span className="label-kunyomi">KUN</span> fuyu
            </p>
          </div>
          <div className="card-meaning">Winter</div>
          <div className="card-details">Grade 2 "Kyōiku" kanji</div>
        </div>
      </div>
    )
  }
}
