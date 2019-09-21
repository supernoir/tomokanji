import React, { Component, ReactText } from 'react';
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

interface CardProps {
	id: number;
	kunyomi?: string;
	onyomi?: string;
	kanji: string;
	english: string;
	example: string;
	yomi: string | ReactText;
	current: number;
	total: number;

}

export default class Card extends Component<CardProps, {}> {
	constructor(props: CardProps) {
		super(props);
		this.state = {
			currentId: 0,
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
							{this.props.kunyomi ? this.props.kunyomi : '訓読みはありませんでした'}
						</StyledCardKunyomiReadingContent>
					</StyledCardKunyomi>

					<StyledCardOnyomi>
						<StyledCardOnyomiReadingType>
							音読み
						</StyledCardOnyomiReadingType>
						<StyledCardOnyomiReadingContent>
							{this.props.onyomi ? this.props.onyomi : '音読みはありませんでした'}
						</StyledCardOnyomiReadingContent>
					</StyledCardOnyomi>
				</StyledCardHead>

				<StyledCardBody>
					<StyledCardKanji>
						<StyledCardKanjiContent>{this.props.kanji}</StyledCardKanjiContent>
					</StyledCardKanji>
				</StyledCardBody>

				<StyledCardFooter>
					<StyledCardMeaning>{this.props.english}</StyledCardMeaning>
					<StyledCardDetails>{this.props.example}</StyledCardDetails>
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
