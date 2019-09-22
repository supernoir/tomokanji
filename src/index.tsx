import React, { ReactText } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import kanjilist from './../data/kanjilist.json'
import Navigation from './components/Navigation';
import { getRandom } from './utils/random'
import { StyledPage, StyledApp, GlobalStyle } from './style'
import { ThemeProvider } from 'styled-components';
import { tomo } from './styles/theme';
import { Header } from './components/Logo/index'

interface AppState {
	kanjiset: {
		id: number;
		kanji: string;
		onyomi?: string;
		kunyomi?: string;
		english: string;
		example: string;
		yomi: string | ReactText;
	}[];
	kanjiCount: number;
	currentKanji: number;
}

interface AppProps { }

export default class App extends React.Component<{}, AppState> {

	constructor(props: AppProps) {
		super(props)
		this.state = {
			kanjiset: kanjilist,
			kanjiCount: kanjilist.length - 1,
			currentKanji: 0
		}
	}

	handlePrevious = () => {
		let current = this.state.currentKanji;
		if (current < 0) {
			this.setState({ currentKanji: current - 1 });
		} else {
			this.setState({ currentKanji: 0 });
		}
	}

	handleRandom = () => {
		this.setState({ currentKanji: getRandom(0, this.state.kanjiCount) });
	}

	handleNext = () => {
		let current = this.state.currentKanji;
		if (current < this.state.kanjiCount) {
			this.setState({ currentKanji: current + 1 });
		} else {
			this.setState({ currentKanji: this.state.kanjiCount });
		}
	}

	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<ThemeProvider theme={tomo}>
					<StyledApp>
						<Header />
						<StyledPage>
							<Card
								id={kanjilist[this.state.currentKanji || 0].id}
								kanji={kanjilist[this.state.currentKanji || 0].kanji}
								kunyomi={kanjilist[this.state.currentKanji || 0].kunyomi}
								onyomi={kanjilist[this.state.currentKanji || 0].onyomi}
								english={kanjilist[this.state.currentKanji || 0].english}
								example={kanjilist[this.state.currentKanji || 0].example}
								yomi={kanjilist[this.state.currentKanji || 0].yomi}
								current={this.state.currentKanji}
								total={this.state.kanjiCount}
							/>
							<Navigation
								handlePrevious={this.handlePrevious}
								handleRandom={this.handleRandom}
								handleNext={this.handleNext}
							/>
						</StyledPage>
					</StyledApp>
				</ThemeProvider>
			</React.Fragment >
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
