import photo01 from './../assets/img/denmark-photo-01.jpg'
import photo02 from './../assets/img/denmark-photo-02.jpg'
import photo03 from './../assets/img/denmark-photo-03.jpg'
import Image from '../components/Image'

function Home() {
	return (
		<>
			<div class="columns">
				<div class="column is-4">
					<Image src={photo01} fullSize={true} alt="Photo of an aerial view of Copenhagen" />
				</div>
				<div class="column is-8">
					<h1>Velkommen. 🇩🇰</h1>
					<h2>God lærelyst</h2>
				</div>
			</div>
		</>
	)
}

export default Home
