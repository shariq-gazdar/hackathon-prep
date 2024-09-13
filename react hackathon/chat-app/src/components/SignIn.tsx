import React from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  Auth,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase";
import GoogleButton from "react-google-button";

function SignIn() {
  const signIn = () => {
    useAuthState(auth)
      .then((result: { user: Auth }) => {
        if (result) {
          console.log("Redirect result:", result);
          useAuthState(result.user);
        }
      })
      .catch((error: { message: any }) => {
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
