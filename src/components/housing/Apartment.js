import React, { useState, useEffect} from 'react';
import Amenity from "./Amenity";

function Apartment(props) {      
    return (
            <div class = "column is-one-third" style = {{"display": "flex", "weight" : "max-width", "height": "max-width"}}>
                <div class = "card" style = {{"width":"100%"}}>
                    <div class="card-content has-text-centered" style = {{"width": "auto", "height": "auto"}}>
                        <div style =  {{"width": "auto", "height": "auto"}}>
                            <h1 class = "has-text-weight-bold py-1">{props.name}</h1>
                            <ul class = "has-text-left">
                                <div class='list-item tags'>
                                    <li>
                                        <span class='is-white tag'>
                                            <i class="fas fa-bed"></i>
                                        </span>
                                        Bedrooms: {props["bedrooms"]}
                                    </li>
                                </div>
                                <div class='list-item tags'>
                                    <li>
                                        <span class='is-white tag'>
                                            <i class="fas fa-bath"></i>
                                        </span>
                                        Bathrooms: {props["bathrooms"]}
                                    </li>
                                </div>
                                <div class='list-item tags'>
                                    <li>
                                        <span class='is-white tag'>
                                            <i class="fas fa-file-invoice-dollar"></i>
                                        </span>
                                        Price: {props["price"]}
                                    </li>
                                </div>
                                <div class='list-item tags'>
                                    <li>
                                        <span class='is-white tag'>
                                            <i class="fas fa-phone"></i>
                                        </span>
                                        Contact: {props["contact"]}
                                    </li>
                                </div>
                            </ul>
                            <hr class = "my-2"></hr>
                            <h1 class = "has-text-weight-semibold py-1">Walking Time To</h1>
                            <nav class="level has-text-centered">
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p>DRL</p>
                                    <p>{props.minToDRL ? props.minToDRL : "N/A"}</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p>Hunstman</p>
                                    <p>{props.minToHuntsman ? props.minToHuntsman : "N/A"}</p>
                                    </div>
                                </div>
                                <div class="level-item has-text-centered">
                                    <div>
                                    <p>Van Pelt</p>
                                    <p>{props.minToVanPeltLibrary ? props.minToVanPeltLibrary : "N/A"}</p>
                                    </div>
                                </div>
                            </nav>
                            {/* <div class = "columns"> 
                                <Amenity type = "gym" />
                                <Amenity type = "pet" />
                                <Amenity type = "study" />
                                <Amenity type = "laundry" />
                                <Amenity type = "pool" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
    );
    
}       

export default Apartment;