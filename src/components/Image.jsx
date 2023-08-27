function Image(props) {
	return (
		<>
			<img src={props.src} className={props.fullSize ? 'full-size' : null} alt={props.alt} />
		</>
	)
}

export default Image
