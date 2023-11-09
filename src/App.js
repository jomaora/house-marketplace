import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Explore } from "./pages/Explore";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Offers } from "./pages/Offers";
import { Profile } from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/sig-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/profile" element={<SignIn/>}/>
      </Routes>
      <NavBar/>
    </Router>
    </>
  );
}

export default App;
