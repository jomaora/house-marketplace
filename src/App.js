import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Explore } from "./pages/Explore";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Offers } from "./pages/Offers";
import { Profile } from "./pages/Profile";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import { Category } from "./pages/Category";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/category/:categoryName" element={<Category/>}/>
        <Route path="/profile" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
      <NavBar/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
