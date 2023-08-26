import FeatherIcon from 'feather-icons-react'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'

const menuItems = [
	{
		title: 'Home',
		link: '/',
		icon: 'home',
	},
	{
		title: 'Decks',
		link: '/decks',
		icon: 'layers',
	},
	{
		title: 'Practice',
		link: '/practice',
		icon: 'play-circle',
	},
	{
		title: 'Overview',
		link: 'overview',
		icon: 'table',
	},
]

function Menu() {
	return (
		<>
			<nav className="nav_main">
				<ul>
					{menuItems.map((item) => {
						return (
							<li key={nanoid()} className={item.isCurrent ? 'current' : null}>
								<NavLink to={item.link} end>
									{item.icon ? <FeatherIcon icon={item.icon} /> : null}
									{item.title}
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Menu
