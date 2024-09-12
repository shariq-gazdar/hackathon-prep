import React from "react";
import SignIn from "./SignIn.tsx";
import { auth } from "../firebase.ts";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div>
      <nav className="bg-blue-600 p-4 w-screen">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">MyApp</div>
          <ul className="flex-wrap md:flex justify-center items-center space-x-4 text-white">
            <li>
              <SignIn />
            </li>
          </ul>
          <div className="md:hidden text-white">Menu</div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
