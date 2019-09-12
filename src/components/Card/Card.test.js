import React from 'react';
import Card from './index';
import { render, shallow } from 'enzyme';

const mockData = [
	{
		id     : 0,
		kanji  : '一',
		onyomi : 'いち、いつ',
		kunyomi: 'ひと、 ひと（つ）',
		english: 'one',
		yomi   : '音',
		example: '一どでいいから、宇宙旅行をしてみたい。'
	},
	{
		id     : 1,
		kanji  : '二',
		onyomi : 'に',
		kunyomi: 'ふた、ふた（つ）',
		english: 'two',
		yomi   : '音',
		example: '勉強を二のつぎにしてあそびに行く。'
	}
];

describe('Card', () => {
	test('should match the snapshot', () => {
		const component = render(
			<Card
				id={mockData[0].id}
				kanji={mockData[0].kanji}
				kunyomihiragana={mockData[0].kunyomi}
				onyomihiragana={mockData[0].onyomi}
				meaning={mockData[0].english}
				detail={mockData[0].example}
				yomi={mockData[0].yomi}
				current={0}
				total={200}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
