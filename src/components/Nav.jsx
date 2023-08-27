import FeatherIcon from 'feather-icons-react'
import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'

function Nav(props) {
	const navItems = props.items

	return (
		<>
			<nav className="nav_main">
				<ul>
					{navItems.map((item) => {
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

export default Nav
