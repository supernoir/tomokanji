import React, { ReactText } from 'react';
import ReactDOM from 'react-dom';

// Import Kanji Data
import kanjilist from '../data/kanjilist.json';

// Import Styles
import { ThemeProvider } from 'styled-components';
import { tomo } from './styles/theme';

// Import Components
import { StyledApp, StyledPage } from './style';
import { StyledBrand, StyledHeader } from './components/Logo/style';
import Navigation from './components/Navigation/index'
import Card from './components/Card/index';
import { getRandom } from './utils/random'

interface AppState {
	kanjiset: {
		id: number;
		kanji: string;
		onyomi: string;
		kunyomi: string;
		english: string;
		yomi: string | ReactText;
		example: string;
	}[];
	kanjicount: number;
	currentkanji: number;
}
interface AppProps {

}

export default class App extends React.Component<AppProps, AppState> {
	constructor(props: any) {
		super(props);
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleRandom = this.handleRandom.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.state = {
			kanjiset: kanjilist,
			kanjicount: kanjilist.length - 1,
			currentkanji: 0
		};
	}
	handlePrevious() {
		let current = this.state.currentkanji;
		if (current < 0) {
			this.setState({ currentkanji: current - 1 });
		} else {
			this.setState({ currentkanji: 0 });
		}
	}
	handleRandom() {
		this.setState({ currentkanji: getRandom(0, this.state.kanjicount) });
	}
	handleNext() {
		let current = this.state.currentkanji;
		if (current < this.state.kanjicount) {
			this.setState({ currentkanji: current + 1 });
		} else {
			this.setState({ currentkanji: this.state.kanjicount });
		}
	}

	render() {
		return (
			<ThemeProvider theme={tomo}>
				<React.Fragment>
					<StyledApp>
						<StyledHeader>
							<StyledBrand />
						</StyledHeader>
						<StyledPage>
							<Card
								id={kanjilist[this.state.currentkanji || 0].id}
								kanji={kanjilist[this.state.currentkanji || 0].kanji}
								kunyomihiragana={kanjilist[this.state.currentkanji || 0].kunyomi}
								onyomihiragana={kanjilist[this.state.currentkanji || 0].onyomi}
								meaning={kanjilist[this.state.currentkanji || 0].english}
								detail={kanjilist[this.state.currentkanji || 0].example}
								yomi={kanjilist[this.state.currentkanji || 0].yomi}
								current={this.state.currentkanji}
								total={this.state.kanjicount}
							/>
							<Navigation handlePrevious={this.handlePrevious} handleNext={this.handleNext} handleRandom={this.handleRandom} />
						</StyledPage>
					</StyledApp>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
