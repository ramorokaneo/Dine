// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBQBLgDsVv3Tl0oWizGaAHQ6WYXh0v_CUs",
  authDomain: "the-app-7f567.firebaseapp.com",
  projectId: "the-app-7f567",
  storageBucket: "the-app-7f567.appspot.com",
  messagingSenderId: "398014330647",
  appId: "1:398014330647:web:0345335e541941c46aa952"
};

if (!ifirebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
