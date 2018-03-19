import React, {Component} from 'react';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			cardData: this.props.data,
			currentId: 0,
			currentData: this.props.data
		};
		this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({counter: 2});
	}

	render() {
		return (
			<div key={this.props.id} className="card">
				<div className="card-head">
					<div className="card-kunyomi">
						<p className="card-reading-type">訓読み</p>
						<p className="card-reading-content">{this.props.kunyomihiragana}</p>
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
					<div className="card-classification">
						<p className="card-classification-type">{this.props.yomi}</p>
					</div>
					<div className="card-kanjicount">
						<span className="card-kanjicount-current">{this.props.current + 1}</span>
						<span className="card-kanjicount-divider">/</span>
						<span className="card-kanjicount-total">{this.props.total + 1}</span>
					</div>
				</div>
			</div>
		);
	}
}
