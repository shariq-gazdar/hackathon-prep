import Navbar from "./components/Navbar.tsx";
import { auth } from "./firebase.ts";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="mainBody">
      <section className="appContainer flex flex-com shadow-2xl  h-full  border border-black">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
