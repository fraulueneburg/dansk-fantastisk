import { useState } from 'react'

function FormAddIPA({ onSubmit }) {
	const [newIPAobj, setNewIPAobj] = useState({
		letter: '',
		pronounciation: '',
		approximation: '',
		IPAname: '',
		IPAnumber: '',
		sound: [],
		tags: [],
		languages: ['dk'],
		interval: 1,
		dueDate: 0,
		answeredRight: 0,
		lapses: 0,
	})

	const handleChange = (e) => {
		let inputName = e.target.name
		let inputValue = e.target.value
		setNewIPAobj({ ...newIPAobj, [inputName]: inputValue })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			onSubmit(newIPAobj)
		} catch (err) {
			console.log('Error while adding new IPA object', err)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="add-ipa">
				<div className="columns">
					<div className="column is-2">
						<label htmlFor="ipa_letter">Letter</label>
						<input
							id="ipa_letter"
							type="text"
							name="letter"
							placeholder="Letter"
							value={newIPAobj.letter}
							onChange={handleChange}
						/>
					</div>
					<div className="column is-2">
						<label htmlFor="ipa_ipaNumber">IPA Number</label>
						<input
							id="ipa_ipaNumber"
							type="number"
							name="sound"
							value={newIPAobj.sound}
							onChange={handleChange}
							placeholder="IPA Num"
						/>
					</div>
					<div className="column is-8">
						<label htmlFor="ipa_ipaName">IPA Name</label>
						<input
							id="ipa_ipaName"
							type="text"
							name="IPAname"
							value={newIPAobj.IPAname}
							onChange={handleChange}
							placeholder="IPA Name"
						/>
					</div>
				</div>
				<div className="columns">
					<div>
						<label htmlFor="ipa_pronounciation">Pronounciation</label>
						<textarea
							id="ipa_pronounciation"
							name="pronounciation"
							value={newIPAobj.pronounciation}
							onChange={handleChange}
							placeholder="pronounciation"
						/>
					</div>
					<div>
						<label htmlFor="ipa_approximation">Approximation</label>
						<textarea
							id="ipa_approximation"
							name="approximation"
							value={newIPAobj.approximation}
							onChange={handleChange}
							placeholder="approximation"
						/>
					</div>
					<div>
						<label htmlFor="ipa_sound">Sound</label>
						<input
							id="ipa_sound"
							type="file"
							name="file"
							value={newIPAobj.file}
							onChange={handleChange}
							placeholder="Sound"
							accept="audio/*"
						/>
					</div>
				</div>
				<button type="submit" value="create new IPA">
					add new IPA
				</button>
			</form>
			<br />
			<br />
		</>
	)
}

export default FormAddIPA
