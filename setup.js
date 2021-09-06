import React from 'react'
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '615283057450-j7rkrr5k9op9rc46monigintpcqa07ls.apps.googleusercontent.com',
});

const firebaseConfig = {

    apiKey: "AIzaSyANJ6DJG6ZqF4cuBNnOisKudigXFn7gWUk",
  
    authDomain: "auth-60480.firebaseapp.com",
  
    projectId: "auth-60480",
  
    storageBucket: "auth-60480.appspot.com",
  
    messagingSenderId: "615283057450",
  
    appId: "1:615283057450:web:4d2da5e732d7ecc2943453",
  
    measurementId: "G-1YW8SNGYWW"
  
  };
  
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export default ()=>{
    return(firebase,auth)
}