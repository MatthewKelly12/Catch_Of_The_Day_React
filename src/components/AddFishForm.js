import React from 'react'

class AddFishForm extends React.Component {
	// CREATE VARIABLES TO STORE DOM REFERENCES FROM INPUTS
	nameRef = React.createRef()
	priceRef = React.createRef()
	statusRef = React.createRef()
	descRef = React.createRef()
	imageRef = React.createRef()

	createFish = event => {
		// PREVENT FROM FROM SUBMITTING
		event.preventDefault()
		// GET TEXT FROM INPUTS AND STORE IN VARIABLES
		const fish = {
			name: this.nameRef.value.value,
			price: parseFloat(this.priceRef.value.value),
			status: this.statusRef.value.value,
			desc: this.descRef.value.value,
			image: this.imageRef.value.value
		}
		this.props.addFish(fish)
		// CLEAR FORM AFTER ENTERING FISH
		event.currentTarget.reset()
	}

	render () {
		return (

			<form className='fish-edit' onSubmit={this.createFish}>
				<input name='name' ref={this.nameRef} type='text' placeholder='Name'/>
				<input name='price' ref={this.priceRef} type='text' placeholder='Price'	/>
				<select name='status' ref={this.statusRef}>
					<option value='available'>Fresh!</option>
					<option value='unavailable'>Sold Out!</option>
				</select>
				<textarea name='desc' ref={this.descRef} placeholder='Desc'/>
				<input name='image' type='text' ref={this.imageRef} placeholder='Image'/>
				<button type='submit'>+ Add Fish</button>
			</form>

		)
	}

}
export default AddFishForm