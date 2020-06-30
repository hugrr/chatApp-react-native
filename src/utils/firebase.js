import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBYQ-I1_2ExvZd9Z21OjkQzS363AAHjnMs',
  authDomain: 'chatapp-b033a.firebaseapp.com',
  databaseURL: 'https://chatapp-b033a.firebaseio.com',
  projectId: 'chatapp-b033a',
  storageBucket: 'chatapp-b033a.appspot.com',
  messagingSenderId: '302016733879',
  appId: '1:302016733879:web:71b9eb7fc92fd86d40e332',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
