function Button(props) {
	return (
		<>
			<button onClick={props.onClickAction}>{props.text}</button>
		</>
	)
}

export default Button
