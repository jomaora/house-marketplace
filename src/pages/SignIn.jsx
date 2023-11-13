import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { toast } from "react-toastify"
import OAuth from "../components/OAuth"

export const SignIn = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setData] = useState({email: '', password: ''});

  const {email, password} = formData;

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
      const {user} = await signInWithEmailAndPassword(auth, email, password);  
      if (user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad user credentials');
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
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

              <div className="signInBar">
                <div className="signInText">Sign In</div>
                <button className="signInButton">
                  <ArrowRightIcon fill="#FFF" width="34px" height="34px" />
                </button>
              </div>
            </div>
          </form>

          <OAuth/>

          <Link 
            className="registerLink"
            to="/sign-up"
          >
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  )
}
