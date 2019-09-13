import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCC6cKRxvrmsGrOsqm8JP8xHv-ZegVLql8',
  authDomain: 'tudoist-clone.firebaseapp.com',
  databaseURL: 'https://tudoist-clone.firebaseio.com',
  projectId: 'tudoist-clone',
  storageBucket: 'tudoist-clone.appspot.com',
  messagingSenderId: '84447005307',
  appId: '1:84447005307:web:2a0e010f1a5395b2',
});

export default firebaseConfig;
