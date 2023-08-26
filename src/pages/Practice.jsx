import dataSyllables from '../data/syllables.json'
import Flashcard from '../components/Flashcard'
import { nanoid } from 'nanoid'

let cardData = dataSyllables

function Practice() {
	return (
		<>
			<Flashcard key={nanoid()} cardData={cardData} />
		</>
	)
}

export default Practice
