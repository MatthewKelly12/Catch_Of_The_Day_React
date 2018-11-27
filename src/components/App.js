import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {

	state = {
		fishes: {},
		order: {}
	}

	addFish = (fish) => {
		// TAKE COPY OF EXISTING STATE
		const fishes = {... this.state.fishes}
		// ADD NEW FISH FROM AddFishForm TO THAT FISHES VARIABLE
		fishes[`fish${Date.now()}`] = fish
		// SET THE NEW FISHES TO STATE
		this.setState({fishes})
	}

	loadSampleFishes = () => {
		this.setState({fishes:sampleFishes})
	}

	addToOrder = (key) => {
		// TAKE COPY OF EXISTING STATE
		const order = {... this.state.order}
		// EITHER ADD TO THE ORDER OR UPDATE THE NUMBER IN THE ORDER
		order[key] = order[key] + 1 || 1
		// CALL SETSTATE TO UPDATE STATE OBJECT
		this.setState({order})
	}

	render () {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh Seafood Market'/>
					<ul className='fishes'>
						{Object.keys(this.state.fishes)
						.map(key =>
							<Fish
								key={key}
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
							)
						}
					</ul>
				</div>
			  	<Order/>
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		)
	}
}

export default App