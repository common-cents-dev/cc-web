import React, { useState, useEffect} from 'react';
import gymIcon from "../../images/icons/Gym.PNG"
import laundryIcon from "../../images/icons/Laundry.PNG"
import petIcon from "../../images/icons/Pet.PNG"
import poolIcon from "../../images/icons/Pool.PNG"
import studyIcon from "../../images/icons/Study.PNG"

function Apartment(props) {
    var logo = gymIcon;
    var alt = "";

    switch (props.type) {
        case "gym":
            logo = gymIcon;
            alt = "Has a gym";
          break;
        case "laundry":
            logo = laundryIcon;
            alt = "Offers laundry services";
          break;
        case "pet":
            logo = petIcon;
            alt = "Allows pets";
          break;
        case "pool":
            logo = poolIcon;
            alt = "Has a pool";
          break;
        case "study":
            logo = studyIcon;
            alt = "Has study room(s)"
          break;
        default:return;
    }
          
    return (
            <div class = "column py-2">
                <figure class="image is-48x48">
                    <img src={logo} alt = {alt}/>
                </figure>
            </div>
    );
    
}       

export default Apartment;