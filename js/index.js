import React from 'react'
import ReactDOM from 'react-dom'

import Card from './Card'

import CardData from '../data/example.json'

import '../css/main.scss'

const Logo = () => {
  return <p className="logo">友漢字</p>
}

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="page">
          <header><Logo /></header>
          <div className="page-content">
            <div className="card">
              <Card data={CardData} />
            </div>
            <aside><a href="#" className="button">Next!</a></aside>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
