import dataSyllables from '../data/syllables.json'
import Table from './Table'

function Overview() {
	return (
		<>
			<h1>Overview</h1>
			<Table data={dataSyllables} />
		</>
	)
}

export default Overview
