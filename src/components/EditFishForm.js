import React from 'react'
import PropTypes from 'prop-types'


class EditFishForm extends React.Component {
	static propTypes = {
		fish: PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			price: PropTypes.number,
			desc: PropTypes.string,
			status: PropTypes.string
		}),
		index: PropTypes.string,
		updateFish: PropTypes.func,
		deleteFish:	PropTypes.func
	}
	handleChange = (event) => {
		console.log(event.currentTarget.value)
		// UPDATE THAT FISH
		// TAKE A COPY OF THE CURRENT FISH
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name] : event.currentTarget.value
		}
		this.props.updateFish(this.props.index,updatedFish)
	}
	render() {
		return (
			<div className='fish-edit'>
				<input type='text' name='name' onChange={this.handleChange} value={this.props.fish.name}/>
				<input type='text' name='price' onChange={this.handleChange} value={this.props.fish.price}/>
				<select type='text' name='status'onChange={this.handleChange} value={this.props.fish.status}>
					<option value='available'>Fresh!</option>
					<option value='unavailable'>Sold Out!</option>
				</select>
				<textarea type='text' name='desc' value={this.props.fish.desc} onChange={this.handleChange}/>
				<input type='text' name='image' value={this.props.fish.image} onChange={this.handleChange}/>
				<button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
			</div>
		)
	}
}

export default EditFishForm