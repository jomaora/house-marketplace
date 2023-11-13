import { Navigate, Outlet } from "react-router-dom"
import useAuthStatus from "../hooks/UseAuthStatus";

const PrivateRoute = () => {
  const {loggedIn, checkSettingStatus} = useAuthStatus();

  if (checkSettingStatus) {
    return (<h3>Loading</h3>);
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" replace={true} />
}

export default PrivateRoute