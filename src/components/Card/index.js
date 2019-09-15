import React, { Component } from 'react';
import {
	StyledCard,
	StyledCardClassification,
	StyledCardClassAndCount,
	StyledCardDetails,
	StyledCardMeaning,
	StyledCardFooter,
	StyledCardKanjiContent,
	StyledCardKanji,
	StyledCardBody,
	StyledCardKunyomiReadingContent,
	StyledCardOnyomiReadingContent,
	StyledCardKunyomiReadingType,
	StyledCardOnyomiReadingType,
	StyledCardOnyomi,
	StyledCardKunyomi,
	StyledCardHead
} from './style';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardData   : this.props.data,
			currentId  : 0,
			currentData: this.props.data
		};
	}

	render() {
		return (
			<StyledCard key={this.props.id}>
				<StyledCardHead>
					<StyledCardKunyomi>
						<StyledCardKunyomiReadingType>
							訓読み
						</StyledCardKunyomiReadingType>
						<StyledCardKunyomiReadingContent>
							{this.props.kunyomihiragana.length > 0 ? this.props.kunyomihiragana : '訓読みはありませんでした'}
						</StyledCardKunyomiReadingContent>
					</StyledCardKunyomi>

					<StyledCardOnyomi>
						<StyledCardOnyomiReadingType>
							音読み
						</StyledCardOnyomiReadingType>
						<StyledCardOnyomiReadingContent>
							{this.props.onyomihiragana.length > 0 ? this.props.onyomihiragana : '音読みはありませんでした'}
						</StyledCardOnyomiReadingContent>
					</StyledCardOnyomi>
				</StyledCardHead>

				<StyledCardBody>
					<StyledCardKanji>
						<StyledCardKanjiContent>{this.props.kanji}</StyledCardKanjiContent>
					</StyledCardKanji>
				</StyledCardBody>

				<StyledCardFooter>
					<StyledCardMeaning>{this.props.meaning}</StyledCardMeaning>
					<StyledCardDetails>{this.props.detail}</StyledCardDetails>
					<StyledCardClassAndCount>
						{`${this.props.current + 1}/${this.props.total + 1}`}
						<StyledCardClassification>
							{this.props.yomi}
						</StyledCardClassification>
					</StyledCardClassAndCount>
				</StyledCardFooter>

			</StyledCard>
		);
	}
}
