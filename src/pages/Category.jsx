import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import { query, collection, where, getDocs, orderBy, limit, startAfter } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

 export const Category = () => {
  let { categoryName } = useParams();
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const listingRef = collection(db, 'listings');
    const q = query(listingRef, 
      where("type", "==", categoryName),
      orderBy('timestamp', 'desc'),
      limit(10)
    );
    const snapshotResult = await getDocs(q);
    const _items = [];
    snapshotResult.forEach(doc => _items.push({
      id: doc.id,
      data: doc.data()
    }))
    setListings(_items);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  

  return (
    <div className="category">
      <p className="pageHeader">{categoryName === 'rent' ? 'Places for Rent' : 'Places for Sell'}</p>
      {loading ? (<h3>Loading</h3>) : listings && listings.length > 0 ? (
        <main>
          <ul className="categoryListings">
          {listings.map(item => {
              return (<li key={item.id}>{item.id} {item.data.name}</li>)
          })}
          </ul>
        </main>
        
      ) : <p>No results</p>}
      
    </div>
    
  );
  
};