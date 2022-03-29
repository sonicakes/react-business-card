import emailIcon from "../../images/Icon.png";
import linkedin from "../../images/linkedin.png"
import React from "react";

export default function Buttons() {
    return (
        <div className="buttons">
         <button className="button">
         <img src={emailIcon}></img>
        <span>Email</span>
         </button>

         <button className="button blue">
         <img src={linkedin}></img>   
        <span>linkedin</span>
         </button>
        </div>
    )
}