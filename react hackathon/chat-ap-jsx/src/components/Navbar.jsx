import React from "react";
import SignIn from "./SignIn";
import "../index.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Navbar() {
  let [user] = useAuthState(auth);
  console.log(user);

  return (
    <nav className="bg-black text-white flex justify-between items-center">
      <h1 className="p-5 text-3xl">Chat App</h1>
      <SignIn />
    </nav>
  );
}

export default Navbar;
