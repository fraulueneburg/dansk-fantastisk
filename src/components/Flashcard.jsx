import { useState, useEffect } from 'react'
import Button from './Button'
import Audio from './Audio'
import dayjs from 'dayjs'

function Flashcard(props) {
	const today = dayjs().format('YYYY-MM-DD')
	const data = props.cardData

	// const repeatDaysArr = [1, 2, 7, 14, 28, 0]

	let [cardIndex, setCardIndex] = useState(0)
	let [card, setCard] = useState(data[cardIndex])
	const [isCardFlipped, setIsCardFlipped] = useState(false)

	const handleFlip = () => {
		setIsCardFlipped(!isCardFlipped)
	}

	const handleKnow = () => {
		card.DaysUntilRepeat++
		card.AnsweredRight++

		console.log('DATA', data)

		setCardIndex(cardIndex + 1)
		setIsCardFlipped(!isCardFlipped)
	}

	useEffect(() => {
		setCard(data[cardIndex])
	}, [cardIndex, data])

	const handleDontKnow = () => {
		alert('foo')
	}

	return (
		<>
			<section className="flashcard">
				{!isCardFlipped ? (
					<div className="front">
						<h1>{card.Syllable}</h1>
						<h2>
							{card.ExampleWords.map((word, index, arr) => {
								return arr.join(', ')
							})}
						</h2>
						<button onClick={handleFlip}>show answer</button>
					</div>
				) : (
					<div className="back">
						<h1>{card.Syllable}</h1>
						<h2>
							{card.ExampleWords.map((word, index, arr) => {
								return arr.join(', ')
							})}
						</h2>
						<h2>{card.IPA}</h2>
						<small>{card.Description}</small>
						{card.Sound ? <Audio data={card.Sound} autoPlay={true} /> : null}
						<div className="btn-group">
							<Button onClickAction={handleDontKnow} text={'I didn’t know this ❌'} />
							<Button onClickAction={handleKnow} text={'I knew this ✅'} />
						</div>
					</div>
				)}
			</section>
		</>
	)
}

export default Flashcard