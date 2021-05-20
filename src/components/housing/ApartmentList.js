import React, { useState, useEffect} from 'react';
import Apartment from './Apartment';

function ApartmentList(props) {
    const [displayedApartments, setDisplayed] = useState(props.apartments);
    
    useEffect(() => {
        setDisplayed(props.apartments);
    }, [props.apartments]);

    useEffect(() => {
        displayedApartments.sort(function(a, b) {
            return a.bedrooms - b.bedrooms;
          });
    }, [displayedApartments]);
    
    return (
            <div class = "box">
                <div class="control has-icons-left">
                    <div class="select">
                        <select onChange = {e => setDisplayed(e.target.value !== "0" ? props.apartments.filter(apt => apt.bedrooms === parseInt(e.target.value)) : props.apartments)}>
                        <option value = {0} selected>All</option>
                        <option value = {1}>1BR</option>
                        <option value = {2} >2BR</option>
                        <option value = {3}>3BR</option>
                        <option value = {4}>4BR</option>
                        <option value = {5}>5BR</option>
                        </select>
                    </div>
                    <div class="icon is-small is-left">
                        <i class="fas f-list-ol"></i>
                    </div>
                </div>
                <hr></hr>
                <div class = "columns is-multiline">
                    {displayedApartments && displayedApartments.map((a, i) => (
                                        <Apartment {...a} key={i}/>
                    ))}
                </div>
            </div>
    );
}

export default ApartmentList;