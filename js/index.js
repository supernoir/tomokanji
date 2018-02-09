import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'

import CardData from '../data/example.json'
const data = [
  {
    id: 1,
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
    id: 2,
    kanji: '山',
    onyomihiragana: 'さん',
    onyomiromaji: 'san',
    kunyomihiragana: 'やま',
    kunyomiromaji: 'yama',
    meaning: 'Mountain',
    detail: 'Grade 1 "Kyōiku" kanji',
    grade: 1,
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
  render() {
    return (
      <div className="app">
        <header className="header"><Logo /></header>
        <div className="page">
          <Card
            id={data[0].id}
            kanji={data[0].kanji}
            kunyomihiragana={data[0].kunyomihiragana}
            kunyomiromaji={data[0].kunyomiromaji}
            onyomihiragana={data[0].onyomihiragana}
            onyomiromaji={data[0].onyomiromaji}
            meaning={data[0].meaning}
            detail={data[0].detail}
            grade={data[0].grade}
            type={data[0].type}
          />
          <aside className="nav">
            <a href="#" className="button">« Previous 前</a>
            <a href="#" className="button random">Random 運</a>{' '}
            <a href="#" className="button">Next 次 »</a>
          </aside>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
