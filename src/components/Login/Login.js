import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { MyContext } from '../../App';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
  const [loggedInUser,setLoggedInUser] = useContext(MyContext)
    const provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();

    const location = useLocation();

    const [error,setError] = useState('');

    let { from  } = location.state || {from:{pathname:"/"} };



    const handleGoogleSignIn = ()=>{
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   const user = result.user;
  //  //console.log(user);
   const loggedInUser ={name: user.displayName,email:user.email,img:user.photoURL};
   setLoggedInUser(loggedInUser); 
   localStorage.setItem('user', JSON.stringify(loggedInUser));
    history.replace(from || "/");
  }).catch((error) => {
  
    const errorMessage = error.message;
      setError(errorMessage);
  });

    }




    return (
        <div className="container" style={{position: 'absolute',left:"40%",top:"50%"}}>
          <div   className="">
          <button onClick={handleGoogleSignIn} className="btn btn-primary"> Sign in with Google</button>
          <p>{error}</p>
          </div>
        </div>
    );
};

export default Login;