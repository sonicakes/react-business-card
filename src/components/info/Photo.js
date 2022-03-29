import photo from "../../images/woman-portrait-unsplash.jpg";
import React from "react";

export default function Photo() {
    return (
        <div className="photo-section">
           <img src={photo} width="300"></img>
        </div>
    )
}