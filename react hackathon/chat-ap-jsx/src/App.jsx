import Navbar from "./components/Navbar";
import "./index.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  let [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="appContainer">
      <Navbar />
    </div>
  );
}

export default App;
