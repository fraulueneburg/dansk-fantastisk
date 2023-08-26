import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

function Layout() {
	return (
		<>
			<header></header>
			<Nav />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
