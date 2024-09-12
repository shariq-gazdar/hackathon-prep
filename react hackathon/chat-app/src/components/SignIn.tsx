import React from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import GoogleButton from "react-google-button";

function SignIn() {
  const signIn = () => {
    useAuthState(auth)
      .then((result) => {
        if (result) {
          console.log("Redirect result:", result);
          useAuthState(result.user);
        }
      })
      .catch((error) => {
        console.error("Error getting redirect result:", error.message);
      });
  };
  return (
    <div>
      <GoogleButton onClick={signIn} />
    </div>
  );
}
export default SignIn;
