import Rebase from 're-base';
import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBa4gD2Iu1TaZpLxt77CVVNc-JtjMxIGHE",
    authDomain: "catch-of-the-day-mattkelly12.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mattkelly12.firebaseio.com",
    projectId: "catch-of-the-day-mattkelly12"
})

const base = Rebase.createClass(firebaseApp.database())

// THIS IS A NAMED EXPORT
export { firebaseApp }
// THIS IS A DEFAULT EXPORT
export default base