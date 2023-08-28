import { nanoid } from 'nanoid'
import dataIPA from './../data/ipa.json'
import dataSentences from './../data/sentences.json'
import dataSyllables from './../data/syllables.json'
import dataWords from './../data/words.json'
import Button from '../components/Button'

const dataArr = [
	{ title: 'IPA', content: dataIPA },
	{ title: 'Syllables', content: dataSyllables },
	{ title: 'Words', content: dataWords },
	{ title: 'Sentences', content: dataSentences },
]

function Decks() {
	return (
		<>
			<h1>Decks</h1>
			<div className="columns is-multiline">
				{dataArr.map((elem) => {
					return (
						<div key={nanoid()} className="column is-5">
							<h2>{elem.title}</h2>
							<p>Cards: {elem.content.length}</p>
							<Button text="Practice" />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Decks
