import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBv2-FfOT0nGAj6weae5EFDC0NjtlbXjT8",
    authDomain: "dealer-c8a42.firebaseapp.com",
    databaseURL: "https://dealer-c8a42.firebaseio.com",
    projectId: "dealer-c8a42",
    storageBucket: "dealer-c8a42.appspot.com",
    messagingSenderId: "1000301013042"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}