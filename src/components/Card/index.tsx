import React, { Component, ReactText, ReactChild } from 'react';
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

interface YomiMissingProps {
	yomi: string;
}

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

const YomiMissing: React.FC<YomiMissingProps> = ({ yomi }) => <div>{`(シ_ _)シ ${yomi}はありませんでした`}</div>

const Card: React.FC<CardProps> = ({
	id,
	kunyomi,
	onyomi,
	kanji,
	english,
	example,
	current,
	total,
	yomi
}) => {
	return (
		<StyledCard key={`${kanji}-${id}`}>
			<StyledCardHead>
				<StyledCardKunyomi>
					<StyledCardKunyomiReadingType>
						訓読み
						</StyledCardKunyomiReadingType>
					<StyledCardKunyomiReadingContent>
						{kunyomi ? <p>{kunyomi}</p> : <YomiMissing yomi={'訓読み'} />}
					</StyledCardKunyomiReadingContent>
				</StyledCardKunyomi>

				<StyledCardOnyomi>
					<StyledCardOnyomiReadingType>
						音読み
						</StyledCardOnyomiReadingType>
					<StyledCardOnyomiReadingContent>
						{onyomi ? <p>{onyomi}</p> : <YomiMissing yomi={'音読み'} />}
					</StyledCardOnyomiReadingContent>
				</StyledCardOnyomi>
			</StyledCardHead>

			<StyledCardBody>
				<StyledCardKanji>
					<StyledCardKanjiContent>{kanji}</StyledCardKanjiContent>
				</StyledCardKanji>
			</StyledCardBody>

			<StyledCardFooter>
				<StyledCardMeaning>{english}</StyledCardMeaning>
				<StyledCardDetails>{example}</StyledCardDetails>
				<StyledCardClassAndCount>
					{`${current + 1}/${total + 1}`}
					<StyledCardClassification>
						{yomi}
					</StyledCardClassification>
				</StyledCardClassAndCount>
			</StyledCardFooter>

		</StyledCard>
	);

}

export default Card