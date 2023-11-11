import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import {db} from '../firebase.config';
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { toast } from "react-toastify";

export const SignUp = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setData] = useState({ email: '', password: '', name: '' });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = e => {
    setData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const {user} = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );

      const userData = {...formData, timestamp: serverTimestamp()};
      delete userData.password;
      await setDoc(doc(db, "users", user.uid), userData);
      updateProfile(auth.currentUser, {displayName: name});

      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
          <input
              id="name"
              type="text"
              className="nameInput"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />

            <input
              id="email"
              type="email"
              className="emailInput"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input
                type={showPassword ? 'text' : 'password'}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />

              <img
                src={visibilityIcon}
                alt="show Password"
                className="showPassword"
                onClick={() => setShowPassword((prev) => !prev)}
              />

              <Link
                to="/forgot-password"
                className="forgotPasswordLink">
                Forgot Password
              </Link>

              <div className="signUpBar">
                <div className="signUpText">Sign Up</div>
                <button className="signUpButton">
                  <ArrowRightIcon fill="#FFF" width="34px" height="34px" />
                </button>
              </div>
            </div>
          </form>

          { /* Google Oauth */}

          <Link
            className="registerLink"
            to="/sign-in"
          >
            Sign In Instead
          </Link>
        </main>
      </div>
    </>
  )
}
