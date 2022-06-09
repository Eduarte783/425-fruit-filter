import React, { Component } from 'react'
import Input from './Input'
import List from './List'

const starterFruits = [
	'Mango',
	'Apple',
	'Pineapple',
	'Strawberry',
	'Watermelon',
	'Apricot',
	'Nectarine',
	'Pomegranite',
	'Kiwi'
]

export default class FruitContainer extends Component {
	// state will live here in the parent components
	state = {
		// data to display in the list
		fruitsToDisplay: starterFruits,
		// data input to use to filter fruits
		filterValue: ''
	}

	// event handlers will live here that manipulate state
	handleFilterChange = e => {
		// what the user typed in
		const filterValue = e.target.value
		// loop over the fruits to display and filter and inlude them if they match what has been typed
		const filteredFruitList = this.state.fruitsToDisplay.filter(fruit => {
			// return a bool -- if true the fruit will be kept in the array
			// if false -- fruit will not be kept in the array
			return fruit.toLowerCase().includes(filterValue.toLowerCase())
		})
		this.setState({ 
			filterValue,
			fruitsToDisplay: filteredFruitList
		})
	}

	render() {
		return (
			<div>
				<h1>Fruit Filter</h1>
				{/* pass event handlers to the input */}
				<Input 
					handleFilterChange={this.handleFilterChange}
					value={this.state.filterValue}
				/>

				{/* pass the data from state to the list */}
				<List 
					fruits={this.state.fruitsToDisplay}
				/>
			</div>
		)
	}
}