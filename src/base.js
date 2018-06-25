import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZQ3TqPaWU9MFfS0nPEvOO0yDtHIHClxo",
    authDomain: "woof-bali-app.firebaseapp.com",
    databaseURL: "https://woof-bali-app.firebaseio.com",
  })

  const base = Rebase.createClass(firebaseApp.database());

  export {firebaseApp};
  
  export default base;