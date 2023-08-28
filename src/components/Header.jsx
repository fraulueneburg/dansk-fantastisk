import FeatherIcon from 'feather-icons-react'

function Header() {
	return (
		<>
			<header>
				Header
				<button style={{ float: 'right' }}>
					<FeatherIcon icon="sun" />
					<FeatherIcon icon="moon" />
				</button>
			</header>
		</>
	)
}

export default Header
