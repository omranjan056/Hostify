import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, RecaptchaVerifier} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5m2OCAaxKpscl0y8q5WxWOsRS2dqM3Yo",
  authDomain: "login-with-5a647.firebaseapp.com",
  projectId: "login-with-5a647",
  storageBucket: "login-with-5a647.appspot.com",
  messagingSenderId: "750089422713",
  appId: "1:750089422713:web:c3d8487bfed01ea036d1a8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
// export const SingInWithGoogle = ()=>{
//      signInWithPopup(auth, provider)
//     .then((res)=>{
//         localStorage.setItem("name", res.user.displayName);
//         localStorage.setItem("email", res.user.email);
//         localStorage.setItem("profilePic", res.user.photoURL);
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// }

const setUpRecaptcha = (number)=>{
  const recaptchaVerifirer = new RecaptchaVerifier();
  
}