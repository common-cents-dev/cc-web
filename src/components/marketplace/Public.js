import React from "react";
import logo from "../../images/logos/public_logo.png"

class Public extends React.Component{
    render(){
        return(
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        <span>Public.com</span>
                        <div class="tags is-pulled-right pl-1"> 
                            <span class="tag is-default">Investing</span>
                            <span class="tag is-default">App</span>
                            <span class="tag is-default">CC Partner</span>
                        </div>
                        </p>
                    </header>
                    <div class="card-content has-text-centered" style = {{"width": "auto", "height": "auto"}}>
                        <figure class="image is-inline-block" style = {{"width": "auto", "height": "auto"}}>
                        <img src={logo} style = {{"width": "256px", "height": "256px", "margin": "0"}} alt="Landing template screenshot" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <a href="https://public.com/" class="card-footer-item">Download</a>
                        <a href="https://public.com/" class="card-footer-item">Learn
                        More</a>
                    </footer>
                </div>
          );
    }
}
export default Public;
