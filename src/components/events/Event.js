import React, { useState, useEffect} from 'react';

function Event(props) {

    const [infoDisplay, setDisplay] = useState(false);
    const [height, setHeight] = useState("auto");
    const [width, setWidth] = useState("auto");
    const [classAttribute, setClassAttributes] = useState("card");



    function handleClick() {
        if (props.highlights == null) {
            return;
        }

        var elem = document.getElementById(props.name);
        var height = elem.clientHeight;
        var width = elem.clientWidth;

        setDisplay(!infoDisplay);
        console.log(infoDisplay);
        if (infoDisplay) {
            setClassAttributes("card rotate-vert-center")
        } else {
            setClassAttributes("card rotate-vert-center-reverse")
        }

        setHeight(height);
        setWidth(width);
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
                <div id = {props.name} class="card-content has-text-centered p-0" style = {{"width": "fit-content", "height": height, "background-image": props.IG_square}}>
                    {!infoDisplay && 
                    <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={props.IG_square} style = {{"width": width, "height": height, "margin": "0"}} alt={props.name} />
                    </figure>}
                    {infoDisplay &&
                     <div style =  {{"width": "auto", "height": "auto"}}> <iframe title = {props.name} style = {{"height": height, "width": width}} src = {props.highlights} allow = "fullscreen"></iframe>
                   </div>}
                </div>
                <footer class="card-footer">
                    <a href onClick={() => handleClick()} class="card-footer-item">{props.highlights ? "Learn More" : "Coming Soon"}</a>
                </footer>
            </div>
            </div>
        );
}
export default Event;