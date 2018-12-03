import React from 'react'
import PropTypes from 'prop-types'


const Login = (props) => {
	return (
 		<nav className='login'>
		 	<h2>Inventory Login</h2>
			<p>Sign In To Manage Your Store Inventory</p>
			<button className='github'
				onClick={()=>props.authenticate('Github')}
			>
				Log In With Github
			</button>
			<button className='facebook'
				onClick={()=>props.authenticate('Facebook')}
			>
				Log In With Facebook
			</button>
		</nav>
	)
}

Login.propTypes = {
	authenticate: PropTypes.func.isRequired
}

export default Login