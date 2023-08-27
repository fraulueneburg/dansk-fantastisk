import { nanoid } from 'nanoid'
import Audio from './Audio'

function Table(props) {
	const data = props.data
	const dataKeys = Object.keys(data[0])

	return (
		<>
			{data.length > 0 ? (
				<figure className="table">
					<table>
						<thead>
							<tr>
								{dataKeys.map((singleKey) => {
									return <th key={nanoid()}>{singleKey}</th>
								})}
							</tr>
						</thead>
						<tbody>
							{data.map((singleObj, index) => {
								return (
									<tr key={nanoid()}>
										{Object.values(data[index]).map((objectValue, i) => {
											let cellContent = ''

											if (dataKeys[i] === 'Sound') {
												cellContent = <Audio data={objectValue} />
											} else if (Array.isArray(objectValue)) {
												cellContent = objectValue.join(', ')
											} else {
												cellContent = objectValue
											}

											return i === 0 ? (
												<th className={dataKeys[i]} key={nanoid()}>
													{cellContent}
												</th>
											) : (
												<td className={dataKeys[i]} key={nanoid()}>
													{cellContent}
												</td>
											)
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</figure>
			) : (
				<p>No data to display</p>
			)}
		</>
	)
}

export default Table
