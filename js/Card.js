import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter    : 0,
			cardData   : this.props.data,
			currentId  : 0,
			currentData: this.props.data
		};
		this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({ counter: 2 });
	}

	render() {
		return (
			<div key={this.props.id} className="card">
				<div className="card-head">
					<div className="card-kunyomi">
						<p className="card-reading-type">訓読み</p>
						<p className="card-reading-content">{this.props.kunyomihiragana.length > 0 ?this.props.kunyomihiragana : '訓読みはありませんでした'}</p>
					</div>
					<div className="card-onyomi">
						<p className="card-reading-type">音読み</p>
						<p className="card-reading-content">{this.props.onyomihiragana}</p>
					</div>
				</div>
				<div className="card-body">
					<div className="card-kanji">
						<h1 className="card-kanji-content">{this.props.kanji}</h1>
					</div>
				</div>
				<div className="card-footer">
					<div className="card-meaning">{this.props.meaning}</div>
					<div className="card-details">{this.props.detail}</div>
					<div className="card-classandcount">
						<p className="card-kanjicount">
							{`${this.props.current + 1 }/${this.props.total + 1}`}
						</p>
						<p className="card-classification">
							{this.props.yomi}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
