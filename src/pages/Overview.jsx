import dataSyllables from '../data/syllables.json'
import dataIPA from '../data/ipa.json'
import dataSentences from '../data/sentences.json'
import Tabs from '../components/Tabs'

function Overview() {
	return (
		<>
			<h1>Overview</h1> <input type="search" placeholder="filter" />
			<Tabs
				data={[
					{ title: 'IPA', content: dataIPA, format: 'table' },
					{ title: 'Syllables', content: dataSyllables, format: 'table' },
					{ title: 'Sentences', content: dataSentences, format: 'table' },
				]}
			/>
		</>
	)
}

export default Overview
