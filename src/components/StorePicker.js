import React from 'react'
import {getFunName} from '../helpers'
import PropTypes from 'prop-types'

class StorePicker extends React.Component {
	myInput = React.createRef()

	static propTypes = {
		history: PropTypes.object,
	}

	goToStore = (event) => {
		// STOP FORM FROM SUBMITTING
		event.preventDefault()
		// GET TEXT FROM INPUT
		const storeName = this.myInput.value.value
		// CHANGE THE PAGE TO URL '/store/{textinput}'
		this.props.history.push(`/store/${storeName}`)
	}


	render () {
	return (
		<form className='store-selector' onSubmit={this.goToStore}>
			<h2>Please Enter A Store</h2>
			<input
				type='text'
				ref={this.myInput}
				required
				placeholder='Store Name'
				defaultValue={getFunName()}
			/>
			<button type='submit'>Visit Store -></button>
		</form>
	)
	}
}

export default StorePicker