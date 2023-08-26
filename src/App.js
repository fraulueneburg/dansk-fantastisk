import './scss/style.scss'
import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Decks from './pages/Decks'
import Practice from './pages/Practice.jsx'
import Overview from './components/Overview'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />}></Route>
					<Route path="/decks" element={<Decks />}></Route>
					<Route path="/practice" element={<Practice />}></Route>
					<Route path="/overview" element={<Overview />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
