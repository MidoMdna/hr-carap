import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/storage'

if (!firebase.apps.length) {
  const config = {
    // apiKey: 'AIzaSyDZ6qodVlByUd3gDkeAl-LzOHYOPvfbSyI',
    // authDomain: 'autoshop-1f073.firebaseapp.com',
    // databaseURL: 'https://autoshop-1f073.firebaseio.com',
    // projectId: 'autoshop-1f073',
    // storageBucket: 'gs://autoshop-1f073.appspot.com',
    // messagingSenderId: '475349066714'
    apiKey: "AIzaSyAQFS4BCYYuYT9xFe7TwUS7HY2dzUVS4B8",
    authDomain: "rent-f8ea3.firebaseapp.com",
    databaseURL: "https://rent-f8ea3.firebaseio.com",
    projectId: "rent-f8ea3",
    storageBucket: "rent-f8ea3.appspot.com",
    messagingSenderId: "375543031181",
    appId: "1:375543031181:web:4e5b3607f7ebe927ff89c4",
    measurementId: "G-EDBBBMY872"
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
const fireStr = firebase.storage()
export {
  fireDb,
  fireStr
}
