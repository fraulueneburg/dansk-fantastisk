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
			<form onSubmit={handleSubmit}>
				<label htmlFor="letter">letter</label>
				<input id="letter" type="text" name="letter" placeholder="Letter" value={newIPAobj.letter} onChange={handleChange} />
				<textarea
					name="pronounciation"
					value={newIPAobj.pronounciation}
					onChange={handleChange}
					placeholder="pronounciation"
				/>
				<textarea name="approximation" value={newIPAobj.approximation} onChange={handleChange} placeholder="approximation" />
				<input type="text" name="IPAname" value={newIPAobj.IPAname} onChange={handleChange} placeholder="IPA Name" />
				<input type="number" name="sound" value={newIPAobj.sound} onChange={handleChange} placeholder="IPA Number" />
				<input type="file" name="file" value={newIPAobj.file} onChange={handleChange} placeholder="Sound" />
				<button type="submit" value="create new IPA">
					create new IPA
				</button>
			</form>
			<br />
			<br />
		</>
	)
}

export default FormAddIPA
