import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPage = route => {
    return location.pathname === route
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => {navigate('/')}}>
            <ExploreIcon fill={ isCurrentPage('/') ? "#2C2C2C" : "#8f8f8f"} width="36px" height="36px" />
            <p className={ isCurrentPage('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => {navigate('/offers')}}>
            <OfferIcon fill={ isCurrentPage('/offers') ? "#2C2C2C" : "#8f8f8f"} width="36px" height="36px" />
            <p className={ isCurrentPage('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => {navigate('/profile')}}>
            <PersonOutlineIcon fill={ isCurrentPage('/profile') ? "#2C2C2C" : "#8f8f8f"} width="36px" height="36px" />
            <p className={ isCurrentPage('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default NavBar