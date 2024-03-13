// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDx71po1avTYFGWyt0uBku_zFHWBe21IhY',
  authDomain: 'repapic-d7b56.firebaseapp.com',
  projectId: 'repapic-d7b56',
  storageBucket: 'repapic-d7b56.appspot.com',
  messagingSenderId: '55578192881',
  appId: '1:55578192881:web:501340041b02c85e0f7250',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
