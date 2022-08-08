import React from "react";
import styles from "../Styles/Booking.module.css";
import { image2 } from "../assets/index.js";
//import { useParams } from "react-router-dom";
import Sample from "./Sample";

function Movie() {
  // const params = useParams();
  //const movie = params.movieName;
  // const[searchParams,setSearchParams]=useSearchParams()
  // useEffect(()=>{
  //     setSearchParams({languages:'all'});
  //     console.log(searchParams)
  // })

  return (
    <div>
      <div className="row">
        <div className="col-auto">
          <img
            src={image2}
            className={styles.imgContainer}
            alt="Bhulbhulaiya"
          />
        </div>

        <div className={`col-sm-6 ${styles.infoContainer}`}>
         <div style={{alignContent:"center"}}><h1 className="font-link">Movie name</h1></div> 
<Sample/>
          </div>
      </div>
    </div>
  );
}

export default Movie;
