import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkSettingStatus, setCheckSettingStatus] = useState(true);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) setLoggedIn(true)
      setCheckSettingStatus(false)
    });
  }, [loggedIn])

  return {loggedIn, checkSettingStatus};
}

export default useAuthStatus