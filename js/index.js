import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'

import CardData from '../data/example.json'

import '../css/main.scss'

const Logo = () => {
  return (
    <div className="brand">
      <p className="logo">
        TOMO
        <span className="highlight">KANJI</span>
        {' '}
        友
        <span className="highlight">カンジ</span>
      </p>
      <p className="tagline">友達の漢字</p>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header"><Logo /></header>
        <div className="page">
          <Card data={CardData} />
        </div>
        <aside><a href="#" className="button">Next!</a></aside>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
