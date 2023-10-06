// import dataIPA from '../data/ipa.json'
import dataSyllables from '../data/syllables.json'
import dataSentences from '../data/sentences.json'
import dataWords from '../data/words.json'
import Tabs from '../components/Tabs'
import FormAddIPA from '../components/FormAddIPA'
import { useState, useEffect } from 'react'
import IPAservice from '../services/IPAservice'

function Overview() {
	// const navigate = useNavigate()
	// let inputLetter = 'das ist ein test'

	// const handleAddIPA = async (event) => {
	// 	event.preventDefault()
	// 	const gotToken = localStorage.getItem('authToken')

	// 	try {
	// 		await axios.post(
	// 			`${API_URL}/ipa/create`,
	// 			{
	// 				letter: inputLetter,
	// 			},
	// 			{ headers: { authorization: `Bearer ${gotToken}` } }
	// 		)
	// 		navigate('/')
	// 	} catch (err) {
	// 		console.log('im in the catch block')
	// 		console.log('could not add ipa')
	// 		console.log('THIS IS THE ERR', err)
	// 	}
	// }

	const [loading, setLoading] = useState(true)
	const [fetchedIPAdata, setFetchedIPAdata] = useState('')

	useEffect(() => {
		const fetchIPAdata = async () => {
			try {
				import('../data/ipa.json')
					.then((data) => {
						console.log('OV DATA', data.default)
						setFetchedIPAdata(data.default)
						setLoading(false)
					})
					.catch((err) => {
						console.log('CATCH ERR', err)
					})
			} catch {
				const response = await IPAservice.getAllIPA
				console.log('OV RESPONSE', response)
				setFetchedIPAdata(response.data)
				setLoading(false)
			}
		}
		fetchIPAdata()

		// return () => {
		// 	setFetchedIPAdata([])
		// }
	}, [])

	return (
		<>
			<h1>Overview</h1>
			<FormAddIPA onSubmit={IPAservice.addIPA} />
			{loading && <article aria-busy="true">loading</article>}
			{!loading && (
				<Tabs
					data={[
						{ title: 'IPA', content: fetchedIPAdata, format: 'table' },
						{ title: 'Syllables', content: dataSyllables, format: 'table' },
						{ title: 'Words', content: dataWords, format: 'table' },
						{ title: 'Sentences', content: dataSentences, format: 'table' },
					]}
				/>
			)}
		</>
	)
}

export default Overview
