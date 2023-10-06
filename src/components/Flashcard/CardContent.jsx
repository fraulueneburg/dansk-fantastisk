import Audio from '../Audio'
import Image from '../Image'

function CardContent(props) {
	console.log('props CardContent', props)

	const template = props.template
	const side = props.side
	const data = props.data

	const calcHeadlineSize = (word) => {
		return 'calc(120vw / ' + word.length + ')'
	}

	return (
		<>
			{template === 'ipa' ? (
				side === 'front' ? (
					<>
						<h1 style={{ fontSize: '90vw', lineHeight: '0.5' }}>{data.Letter}</h1>
					</>
				) : (
					<>
						<h1 style={{ fontSize: '90vw', lineHeight: '0.5' }}>{data.Letter}</h1>
						{data.Pronounciation ? <p>{data.Pronounciation}</p> : null}
						{data.Approximation ? <p>{data.Approximation}</p> : null}
						<small>{data.IPAName}</small>
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
					</>
				)
			) : template === 'syllables' ? (
				side === 'front' ? (
					<>
						<h1 style={{ fontSize: calcHeadlineSize(data.Syllable) }}>{data.Syllable}</h1>
						<p>
							{data.ExampleWords.map((word, index, arr) => {
								return word + (index !== arr.length - 1 ? ', ' : '')
							})}
						</p>
					</>
				) : (
					<>
						<h1 style={{ fontSize: calcHeadlineSize(data.Syllable) }}>{data.Syllable}</h1>
						<h2>{data.IPA}</h2>
						{data.Description ? <p>{data.Description}</p> : null}
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
					</>
				)
			) : template === 'words' ? (
				side === 'front' ? (
					<>
						<h1 style={{ fontSize: calcHeadlineSize(data.Word) }}>{data.Word}</h1>
					</>
				) : (
					<>
						<h1 style={{ fontSize: calcHeadlineSize(data.Word) }}>{data.Word}</h1>
						{data.IPA ? <p>{data.IPA}</p> : null}
						{data.Sound ? <Audio data={data.Sound} autoPlay={true} /> : null}
						{data.Image ? <Image src={require('/public/img-words/' + data.Image)} alt={data.Word} /> : null}
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
