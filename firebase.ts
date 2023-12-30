// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCezW_VvDYJhXs_QDi2Z1W0JNBor-3_dW0",
  authDomain: "netflix-clone-app-b5711.firebaseapp.com",
  projectId: "netflix-clone-app-b5711",
  storageBucket: "netflix-clone-app-b5711.appspot.com",
  messagingSenderId: "938508503604",
  appId: "1:938508503604:web:53b9797870f5b49e501861",
  measurementId: "G-2GCQX8XSJY"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }