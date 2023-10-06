import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

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
		title: 'Play',
		link: 'play',
		icon: 'smile',
	},
	{
		title: 'Overview',
		link: 'overview',
		icon: 'table',
	},
	{
		title: 'Grammar',
		link: 'grammar',
		icon: 'book-open',
	},
]

function Layout() {
	return (
		<>
			<Nav items={menuItems} />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
