import React from "react";
import { Button } from "@material-ui/core";

import { useStateValue } from '../stateProvider'
import { actionTypes } from "../reducer";
import { auth, provider } from "../firebase";

import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://www.freepngimg.com/download/whatsapp/77102-whatsapp-computer-call-telephone-icons-png-image-high-quality.png'
          alt=''
        />
        <div className='login__text'>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={handleSignIn}>Sign in Wtih Google</Button>
      </div>
    </div>
  );
}

export default Login;
