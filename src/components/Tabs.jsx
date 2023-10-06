import Table from './Table'
import { useState, useMemo } from 'react'
import { nanoid } from 'nanoid'

function Tabs(props) {
	const data = useMemo(() => {
		return props.data
	}, [props.data])

	const [activeTabIndex, setActiveTabIndex] = useState(0)

	return (
		<>
			<div className="tabs">
				<div role="tablist">
					{data.map((item, index) => {
						return (
							<button
								key={nanoid()}
								role="tab"
								id={`tab-${index}`}
								aria-controls={`panel-${index}`}
								aria-selected={+index === +activeTabIndex ? true : false}
								onClick={() => {
									setActiveTabIndex(+index)
								}}
								data-index={+index}>
								<span>{item.title}</span>
							</button>
						)
					})}
				</div>
				<div className="tabpanel-list">
					{data.map((item, index) => {
						return (
							<div
								key={nanoid()}
								id={`panel-${index}`}
								role="tabpanel"
								tabIndex="0"
								hidden={+index !== +activeTabIndex ? true : false}
								aria-labelledby={`tab-${index}`}>
								{typeof item.content === 'object' ? <Table data={item.content} /> : 'No table data to display'}
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Tabs
