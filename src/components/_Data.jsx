import dataIPA from '../data/ipa.json'
import dataSentences from '../data/sentences.json'
import dataSyllables from '../data/syllables.json'
import dataWords from '../data/words.json'

function DataArr() {
	const dataArr = [
		{ title: 'IPA', template: 'ipa', content: dataSyllables },
		{ title: 'Syllables', template: 'syllables', content: dataSyllables },
		{ title: 'Words', template: 'words', content: dataSyllables },
		{ title: 'Sentences', template: 'sentences', content: dataSyllables },
	]
}

export default DataArr
