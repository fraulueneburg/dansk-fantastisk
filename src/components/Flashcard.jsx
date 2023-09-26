import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import CardContent from './Flashcard/CardContent'
import Button from './Button'

function Flashcard(props) {
	const today = dayjs().format('YYYY-MM-DD')
	const data = props.cardData.content
	const template = props.cardData.template
	const repeatDaysArr = [1, 2, 7, 14, 28, -1]

	let [cardIndex, setCardIndex] = useState(0)
	let [card, setCard] = useState(data[cardIndex])
	useEffect(() => {
		setCard(data[cardIndex])
	}, [cardIndex, data])

	const [isCardFlipped, setIsCardFlipped] = useState(false)
	const handleFlip = () => {
		setIsCardFlipped(!isCardFlipped)
	}

	const handleKnow = () => {
		const newIntervalIndex = repeatDaysArr.findIndex((elem) => elem === card.Interval) + 1
		const newInterval = repeatDaysArr[newIntervalIndex]

		card.DueDate = dayjs(today).add(newInterval, 'day').format('YYYY-MM-DD')
		card.Interval = newInterval
		card.AnsweredRight++
		card.Lapses++
		setCardIndex((prevIndex) => prevIndex + 1)
		setIsCardFlipped(!isCardFlipped)
		console.log('DATA UPDATED', data)
	}

	const handleDontKnow = () => {
		const newIntervalIndex = repeatDaysArr.findIndex((elem) => elem === card.Interval) - 1
		const newInterval = repeatDaysArr[newIntervalIndex]

		newInterval !== undefined
			? (card.DueDate = dayjs(today).add(newInterval, 'day').format('YYYY-MM-DD'))
			: (card.DueDate = dayjs(today).add(1, 'day').format('YYYY-MM-DD'))

		card.Interval = newInterval
		card.Lapses++
		setCardIndex(cardIndex + 1)
		setIsCardFlipped(!isCardFlipped)
		console.log('DATA UPDATED (WRONG ANSWER)', data)
	}

	return (
		<>
			<section className="flashcard">
				{!isCardFlipped ? (
					<div className="front">
						<CardContent side="front" template={template} data={card} />
						<Button onClickAction={handleFlip} text="show answer" />
					</div>
				) : (
					<div className="back">
						<CardContent side="back" template={template} data={card} />
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
