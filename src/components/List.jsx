import React, { Component } from 'react'

export default class List extends Component {
	render() {
		// loop over the fruits passed from the parent to make jsx
		const fruitItems = this.props.fruits.map((fruit, i) => {
			return <li key={`fruitItem${i}`}>{fruit}</li>
		})

		return (
			<div>
				<ul>
					{fruitItems}
				</ul>
			</div>
		)
	}
}