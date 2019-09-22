import React, { ReactText, useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import kanjilist from './../data/kanjilist.json'
import Navigation from './components/Navigation';
import { getRandom } from './utils/random'
import { StyledPage, StyledApp, GlobalStyle } from './style'
import { ThemeProvider } from 'styled-components';
import { tomo } from './styles/theme';
import { Header } from './components/Logo/index'

const App: React.FC = () => {
	const kanjiCount = kanjilist.length - 1
	const [currentKanji, setCurrentKanji] = useState(0)

	const handlePrevious = () => {
		let current = currentKanji;
		if (current < 0) {
			setCurrentKanji(current - 1);
		} else {
			setCurrentKanji(0);
		}
	}

	const handleRandom = () => {
		setCurrentKanji(getRandom(0, kanjiCount))
	}

	const handleNext = () => {
		let current = currentKanji;
		if (current < kanjiCount) {
			setCurrentKanji(current + 1)
		} else {
			setCurrentKanji(kanjiCount)
		}
	}

	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={tomo}>
				<StyledApp>
					<Header />
					<StyledPage>
						<Card
							id={kanjilist[currentKanji || 0].id}
							kanji={kanjilist[currentKanji || 0].kanji}
							kunyomi={kanjilist[currentKanji || 0].kunyomi}
							onyomi={kanjilist[currentKanji || 0].onyomi}
							english={kanjilist[currentKanji || 0].english}
							example={kanjilist[currentKanji || 0].example}
							yomi={kanjilist[currentKanji || 0].yomi}
							current={currentKanji}
							total={kanjiCount}
						/>
						<Navigation
							handlePrevious={handlePrevious}
							handleRandom={handleRandom}
							handleNext={handleNext}
						/>
					</StyledPage>
				</StyledApp>
			</ThemeProvider>
		</React.Fragment >
	);

}
export default App

ReactDOM.render(<App />, document.getElementById('app'));
