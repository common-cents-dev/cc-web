import React, { useState, useEffect} from 'react';
import logo from "../../images/logos/discover_logo.png"

function Event(props) {

    const [infoDisplay, setDisplay] = useState(false);
    const [height, setHeight] = useState("auto");
    const [classAttribute, setClassAttributes] = useState("card");

    function handleClick() {
        setDisplay(!infoDisplay);
        console.log(infoDisplay);
        if (infoDisplay) {
            setClassAttributes("card rotate-vert-center")
        } else {
            setClassAttributes("card rotate-vert-center-reverse")
        }
    }

    return (
            <div class = "column is-one-third">
            <div class={classAttribute}>
                <header class="card-header">
                    <p class="card-header-title">
                    <span>{props.name}</span>
                    {/* <div class="tags is-pulled-right"> 
                        <span class="tag is-default">{props.category}</span>
                        {/* <span class="tag is-default">App</span>
                    </div> */}
                    </p>
                </header>
                <div id = {props.date} class="card-content has-text-centered p-0" style = {{"width": "fit-content", "height": "auto", "background-image": props.IG_square}}>
                    {!infoDisplay && 
                    <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={props.IG_square} style = {{"width": "auto", "height": "auto", "margin": "0"}} alt={props.name} />
                    </figure>}
                    {infoDisplay &&
                     <div style =  {{"width": "auto", "height": "auto"}}> <iframe title = {props.name} style = {{"height": "100%", "width": "100%"}} src = {props.highlights}></iframe>
                   </div>}
                </div>
                <footer class="card-footer">
                    <a href onClick={() => handleClick()} class="card-footer-item">Learn More</a>
                </footer>
            </div>
            </div>
        );
}
export default Event;