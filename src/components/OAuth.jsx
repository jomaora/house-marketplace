import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"
import { useLocation, useNavigate } from "react-router-dom"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import GoogleIcon from '../assets/svg/googleIcon.svg'

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      
      const {user} = await signInWithPopup(auth, provider);
      const userRef = doc(db, 'users', user.uid);

      const userInDb = await getDoc(userRef);
      if (!userInDb.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with google');
    }
  }

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className="socialIconDiv">
        <img className="socialIconImg" src={GoogleIcon} alt='Google' onClick={onGoogleClick} />
      </button>
    </div>
  )
}

export default OAuth