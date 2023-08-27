import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
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
			<Header />
			<Nav items={menuItems} />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
