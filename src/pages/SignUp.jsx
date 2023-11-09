import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

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

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form action="">
          <input
              id="text"
              type="name"
              className="nameInput"
              placeholder="Email"
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
