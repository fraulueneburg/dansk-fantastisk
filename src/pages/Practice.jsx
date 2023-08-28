import { nanoid } from 'nanoid'
import { useState } from 'react'
import Flashcard from '../components/Flashcard'
import Button from '../components/Button'

import dataIPA from './../data/ipa.json'
import dataSentences from './../data/sentences.json'
import dataSyllables from './../data/syllables.json'
import dataWords from './../data/words.json'

const dataArr = [
	{ title: 'IPA', content: dataSyllables },
	{ title: 'Syllables', content: dataSyllables },
	{ title: 'Words', content: dataSyllables },
	{ title: 'Sentences', content: dataSyllables },
]

function Practice() {
	const [cardData, setCardData] = useState()

	return (
		<>
			<h1>Choose a card deck:</h1>
			{dataArr.length > 0 ? (
				<div className="btn-group">
					{dataArr.map((elem) => {
						return <Button key={nanoid()} active={true} text={elem.title} onClickAction={() => setCardData(elem.content)} />
					})}
				</div>
			) : null}
			{cardData ? <Flashcard key={nanoid()} cardData={cardData} /> : null}
		</>
	)
}

export default Practice
