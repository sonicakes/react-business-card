import React from "react";
import Photo from "./info/Photo";
import Buttons from "./info/Buttons";
import Name from "./info/Name";

export default function Info() {
    return (
        <div className="info-section">
            <Photo />
            <Name />
            <Buttons /> 
        </div>
    )
}