import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base'

class Inventory extends React.Component {

	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish:	PropTypes.func,
		loadSampleFishes: PropTypes.func
	}

	state = {
		uid: null,
		owner: null
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.authHandler({user})
			}
		})
	}

	authHandler = async authData => {
		// LOOK UP CURRENT STORE IN FIREBASE DATABASE
		const store = await base.fetch(this.props.storeId, { context:this })
		console.log(store)
		// CLAIM STORE IF NO OWNER
		if (!store.owner) {
			// SAVE STORE AS OUR OWN
			await base.post(`${this.props.storeId}/owner`, {
				data: authData.user.uid
			})
		}
		// SET STATE OF CURRENT INVENTORY TO REFLECT CURRENT USER
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid
		})
		console.log(authData)
	}
	authenticate = (provider) => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler)
	}

	logout = async () => {
		console.log('logging out')
		await firebase.auth().signOut()
		this.setState({uid:null})
	}
	render () {
		const logout = <button onClick={this.logout}>Log Out</button>
		// CHECK TO SEE IF USER IS LOGGED IN
		if (!this.state.uid) {
			return <Login authenticate={this.authenticate}/>
		}
		// CHECK TO SEE IF USER IS NOT OWNER OF THE STORE
		if (this.state.uid !== this.state.owner) {
			return (
				<div>
					<p>Sorry you are not the owner!</p>
					{logout}
				</div>
			)
		}
		// OWNER OF STORE, RENDER INVENTORY
		return (
			<div>
				<h2>Inventory!</h2>
				{logout}
				{
				Object.keys(this.props.fishes)
					.map(key =>
						<EditFishForm
							key={key}
							index={key}
							fish={this.props.fishes[key]}
							updateFish={this.props.updateFish}
							deleteFish={this.props.deleteFish}
						/>
						)
				}
				<AddFishForm addFish={this.props.addFish}/>
				<button
				 	onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
		)
	}

}
export default Inventory