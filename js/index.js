import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'
import * as utils from './utils/random'

import CardData from '../data/example.json'
const data = [
  {
    id: 0,
    kanji: '冬',
    onyomihiragana: 'とう',
    onyomiromaji: 'tō',
    kunyomihiragana: 'ふゆ',
    kunyomiromaji: 'fuyu',
    meaning: 'Winter',
    detail: 'Grade 2 "Kyōiku" kanji',
    grade: 2,
    type: 'Kyōiku'
  },
  {
    id: 1,
    kanji: '山',
    onyomihiragana: 'さん',
    onyomiromaji: 'san',
    kunyomihiragana: 'やま',
    kunyomiromaji: 'yama',
    meaning: 'Mountain',
    detail: 'Grade 1 "Kyōiku" kanji',
    grade: 1,
    type: 'Kyōiku'
  },
  {
    id: 2,
    kanji: '千',
    onyomihiragana: 'せん',
    onyomiromaji: 'sen',
    kunyomihiragana: 'ち',
    kunyomiromaji: 'chi',
    meaning: 'Thousand',
    detail: 'Grade 1 "Kyōiku" kanji',
    grade: 1,
    type: 'Kyōiku'
  },
  {
    id: 3,
    kanji: '家',
    onyomihiragana: 'か/け',
    onyomiromaji: 'ka, ke',
    kunyomihiragana: 'いえ/や',
    kunyomiromaji: 'ie, ya',
    meaning: 'House, Home',
    detail: 'Grade 2 "Kyōiku" kanji',
    grade: 2,
    type: 'Kyōiku'
  }
]

import '../css/main.scss'

const Logo = () => {
  return (
    <div className="brand">
      <p className="logo">
        友
        <span className="highlight">カンジ</span>
      </p>
    </div>
  )
}

export default class App extends React.Component {
  constructor() {
    super()
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.state = {
      kanjiset: data,
      kanjicount: data.length - 1,
      currentkanji: 0
    }
  }
  handlePrevious() {
    let current = this.state.currentkanji
    if (current < 0) {
      this.setState({ currentkanji: current - 1 })
    } else {
      this.setState({ currentkanji: 0 })
    }
  }
  handleRandom() {
    this.setState({ currentkanji: utils.getRandom(0, this.state.kanjicount) })
  }
  handleNext() {
    let current = this.state.currentkanji
    if (current < this.state.kanjicount) {
      this.setState({ currentkanji: current + 1 })
    } else {
      this.setState({ currentkanji: this.state.kanjicount })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="header"><Logo /></header>
        <div className="page">
          <Card
            id={data[this.state.currentkanji || 0].id}
            kanji={data[this.state.currentkanji || 0].kanji}
            kunyomihiragana={data[this.state.currentkanji || 0].kunyomihiragana}
            kunyomiromaji={data[this.state.currentkanji || 0].kunyomiromaji}
            onyomihiragana={data[this.state.currentkanji || 0].onyomihiragana}
            onyomiromaji={data[this.state.currentkanji || 0].onyomiromaji}
            meaning={data[this.state.currentkanji || 0].meaning}
            detail={data[this.state.currentkanji || 0].detail}
            grade={data[this.state.currentkanji || 0].grade}
            type={data[this.state.currentkanji || 0].type}
            current={this.state.currentkanji}
            total={this.state.kanjicount}
          />
          <aside className="debugger">
            <p>This is the current Kanji Number: {this.state.currentkanji}</p>
            <p>You are accessing {this.state.kanjicount} Kanji</p>
          </aside>
          <aside className="nav">
            <a onClick={this.handlePrevious} className="button">
              ‹ 前 Previous
            </a>
            <a onClick={this.handleRandom} className="button random">
              Random 運
            </a>
            {' '}
            <a onClick={this.handleNext} className="button">
              Next 次 ›
            </a>
          </aside>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
