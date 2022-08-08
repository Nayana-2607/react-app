import React from "react";
import '../Styles/Sample.css'

function Sample(){




return(
<form className="my-form">
  <div className="container">
    
    <ul>
      <li>
        <select>
          <option selected disabled>-- Please choose language --</option>
          <option>Kannada</option>
          <option>Tamil</option>
          <option>Telugu</option>      
        </select>
        </li>
        <li>
        <select>
        <option selected disabled>-- Please choose cinema --</option>
        <option>Cinema 1</option>
          <option>Cinema 2</option>
          <option>Cinema 3</option>   
        </select>
        </li>
     
      <li>
        <div className="grid grid-2">
          <input type="text" placeholder="Name" required/>  
          <input type="text" placeholder="Surname" required/>
        </div>
      </li>
      <li>
        <div className="grid grid-2">
          <input type="email" placeholder="Email" required/>  
          <input type="tel" placeholder="Phone"/>
        </div>
      </li>    
      <li>
        <textarea placeholder="Message"></textarea>
      </li>   

      <li>
        <div className="grid grid-3">
          <div className="required-msg">REQUIRED FIELDS</div>
          <button className="btn-grid" type="submit">
            <span className="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt=""/>
            </span>
            <span className="front">SUBMIT</span>
          </button>
          <button className="btn-grid" type="reset">
            <span className="back">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt=""/>
            </span>
            <span className="front">RESET</span>
          </button> 
        </div>
      </li>    
    </ul>
  </div>
</form>

)


}

export default Sample;