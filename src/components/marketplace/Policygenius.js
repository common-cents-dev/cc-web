import React, { useState, useEffect} from 'react';
import logo from "../../images/logos/policygenius_logo.jpg"

function Policygenius() {

    const [infoDisplay, setDisplay] = useState(false);
    const [height, setHeight] = useState("auto");
    const [classAttribute, setClassAttributes] = useState("card");

    useEffect(() => {
       setHeight(document.getElementById('policygenius').clientHeight);
      }, []);

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
            <div class={classAttribute}>
                <header class="card-header">
                    <p class="card-header-title">
                        <span>PolicyGenius</span>
                        <div class="tags is-pulled-right pl-1"> 
                            <span class="tag is-default">Rent Insurance</span>
                        </div>
                    </p>
                </header>
                <div id = "policygenius" class="card-content has-text-centered" style = {{"width": "auto", "height": height}}>
                    {!infoDisplay && 
                    <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={logo} style = {{"width": "256px", "height": "256px", "margin": "0"}} alt="Product image" />
                    </figure>}
                    {infoDisplay &&
                     <div style =  {{"width": "auto", "height": "auto"}}>
                        <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                            <img src={logo} style = {{"width": "128px", "height": "auto", "margin": "0"}} alt="Product image" />
                        </figure>
                        <ul class = "has-text-left">
                            <div class='list-item tags'>
                                <li>
                                    <span class='is-white tag'>
                                        <i class="fas fa-user-check"></i>
                                    </span>
                                    Curates insurance advice and guidance
                                </li>
                            </div>
                            <div class='list-item tags'>
                                <li>
                                    <span class='is-white tag'>
                                        <i class="fas fa-thumbs-up"></i>
                                    </span>
                                    Offers quotes & recommendations
                                </li>
                            </div>
                            <div class='list-item tags'>
                                <li>
                                    <span class='is-white tag'>
                                        <i class="fas fa-money-bill"></i>
                                    </span>
                                    Can be as little as $8/month
                                </li>
                            </div>
                        </ul>
                    </div>}
                </div>
                <footer class="card-footer">
                    <a href onClick={() => handleClick()} class="card-footer-item">Learn More</a>
                </footer>
            </div>
        );
}

export default Policygenius;
