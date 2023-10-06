import photo01 from './../assets/img/denmark-photo-01.jpg'
import Image from '../components/Image'

function Home() {
	return (
		<>
			<div className="columns">
				<div className="column is-4">
					<Image src={photo01} fullSize={true} alt="Photo of an aerial view of Copenhagen" />
				</div>
				<div className="column is-8">
					<h1>Velkommen. 🇩🇰</h1>
					<h2>God lærelyst</h2>
				</div>
			</div>
		</>
	)
}

export default Home
