import { nanoid } from 'nanoid'

function Audio(props) {
	const soundFilesArr = props.data
	const autoPlay = props.autoPlay ? props.autoPlay : false
	const getSoundFormat = (fileName) => {
		const soundFormat = fileName.slice(fileName.length - 3, fileName.length)
		return soundFormat === 'mp3' ? 'audio/mpeg' : 'audio/' + soundFormat
	}

	return (
		<>
			{soundFilesArr.map((fileName) => {
				return (
					<audio key={nanoid()} controls autoPlay={autoPlay}>
						<source src={require('../assets/sounds/' + fileName)} type={getSoundFormat(fileName)}></source>
					</audio>
				)
			})}
		</>
	)
}

export default Audio
