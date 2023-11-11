import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"

export const Profile = (props) => {
  const[user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, [])

  return (
    <div>Profile {user ? user.displayName : 'Not Logged in'}</div>
  )
}
