import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import BedIcon from "../assets/svg/bedIcon.svg";
import BathtubIcon from "../assets/svg/bathtubIcon.svg";

export const ListingItem = ({listing, id, onDelete = null}) => {
  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imageUrls[0]} alt={listing.name} className="categoryListingImg"/>
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">
            {listing.location}
          </p>
          <p className="categoryListingName">
            {listing.name}
          </p>
          <p className="categoryListingPrice">
            {listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={BedIcon} alt="bed" />
            <p className="categoryListingInfoText">{listing.bedrooms} bedroom(s)</p>
            <img src={BathtubIcon} alt="bathtub" />
            <p className="categoryListingInfoText">{listing.bathrooms} bathroom(s)</p>
          </div>
        </div>
      </Link>
      {onDelete && (<DeleteIcon 
        className="removeIcon" 
        fill="rgb(231, 76, 60)"
        onDelete={() => onDelete(listing.id, listing.name)} />)}
    </li>
  )
}
