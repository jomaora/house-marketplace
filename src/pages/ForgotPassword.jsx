import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

export const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');

  const onChange = e => {
    setEmail(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset Email')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pagerHeader"></p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
        <input 
          type="text"
          id="email"
          placeholder="Email"
          className="emailInput"
          onChange={onChange}
          value={email} />
        <Link className="forgotPasswordLink" to="/sign-in">
          Sign In
        </Link>
        <div className="signInBar">
          <div className="signInText">Send Reset Link</div>
          <button className="signInButton">
            <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
          </button>
        </div>
        </form>
      </main>
    </div>
  )
}
