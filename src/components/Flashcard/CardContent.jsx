import Audio from '../Audio'
import Image from '../Image'

function CardContent(props) {
	console.log('props CardContent', props)

	const template = props.template
	const side = props.side
	const data = props.data

	return (
		<>
			{template === 'ipa' ? (
				side === 'front' ? (
					<>
						<h1>{data.Letter}</h1>
					</>
				) : (
					<>
						<h1>{data.Letter}</h1>
						{data.Pronounciation ? <p>{data.Pronounciation}</p> : null}
						{data.Approximation ? <p>{data.Approximation}</p> : null}
						<small>{data.IPAName}</small>
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
					</>
				)
			) : template === 'syllables' ? (
				side === 'front' ? (
					<>
						<h1>{data.Syllable}</h1>
						<p>
							{data.ExampleWords.map((word, index, arr) => {
								return word + (index !== arr.length - 1 ? ', ' : '')
							})}
						</p>
					</>
				) : (
					<>
						<h1>{data.Syllable}</h1>
						<h2>{data.IPA}</h2>
						{data.Description ? <p>{data.Description}</p> : null}
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
					</>
				)
			) : template === 'words' ? (
				side === 'front' ? (
					<>
						<h1>{data.Word}</h1>
					</>
				) : (
					<>
						<h1>{data.Word}</h1>
						{data.IPA ? <p>{data.IPA}</p> : null}
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
						<Image src={'../../assets/img-words' + data.Image} alt={data.Word} />
					</>
				)
			) : template === 'sentences' ? (
				side === 'front' ? (
					<>
						<h1>{data.Sentence}</h1>
					</>
				) : (
					<>
						{data.IPA ? <h1>{data.IPA}</h1> : <h1>{data.TranslationDE}</h1>}
						{<p>{data.TranslationDE}</p>}
					</>
				)
			) : null}
		</>
	)
}

export default CardContent
