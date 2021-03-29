import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"
import Angie from "../images/headshots/upenn/Angie_Zhou.jpg"
import John from "../images/headshots/upenn/John_Ta.jpg"
import Vivek from "../images/headshots/upenn/Vivek_Olumbe.jpg"
import Winni from "../images/headshots/upenn/Winni_Zhang.jpeg"
import Graham from "../images/headshots/upenn/Graham_Branscom.JPG"
import Rikki from "../images/headshots/upenn/Rikki_Kong.jpg"
import Housing from "../components/housing/PennHousing.js"


function Penn(){
    return (
        <div>            
            <section class="hero is-white">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-vcentered reverse-columns">
                            <div class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-5-desktop is-offset-1-desktop
                            is-5-widescreen is-offset-1-widescreen
                            is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                                <h1 class="title titled is-1 mb-6">
                                Common Cents</h1>
                                <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                                    Penn's first undergraduate financial literacy club
                                    </h2>
                                <div class="buttons">
                                {/* <button class="button is-black">Download</button>
                                <button class="button">Join</button> */}
                                </div>
                            </div>
                            <div data-aos="fade-right" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-4-desktop is-offset-1-desktop
                            is-4-widescreen is-offset-1-widescreen
                            is-4-fullhd is-offset-1-fullhd">
                                <figure class="image">
                                <img src={tree} alt = "tree animation"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            
            <section class="section">
                <h1 class = "title has-text-centered">Executive Board</h1>
                <div class="container">
                    <div class = "columns is-multiline">
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded" src={John} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">John Ta</p>
                                    <p class="subtitle is-6">President<br />
                                    <i>Class of 2022</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Physics, Biochem, & Biophysics. Lifts things up and puts them down.</div>
                            </div>
                        </div>
                    </div>
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Vivek} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Vivek Olumbe</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2022</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Computer Science and Public Policy. Lifts John up and puts him down.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                                <figure class="image"style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded" src={Angie} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Angie Zhou</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2023</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Finance & Management. Supports Janey in her yoga headstands.
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Winni} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Winni Zhang</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2023</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Finance and Management. Loves almond butter.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "256px", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Graham} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Graham Branscom</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2024</i></p>
                                </div>
                                </div>

                                <div class="content">
                                Studying Economics & Computer Science. Snyder's Hard Pretzels enthusiast.  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "column is-one-third" data-aos="fade-down">
                        <div class="card">
                            <div>
                            <figure class="image is-256x256" style = {{"width": "256px", "height": "auto", "margin-top" : "1em", "margin-left": "auto", "margin-right": "auto"}}>
                                <img class = "is-rounded"src={Rikki} alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-centered">Rikki Kong</p>
                                    <p class="subtitle is-6">Vice President<br />
                                    <i>Class of 2024</i></p>
                                </div>  
                                </div>

                                <div class="content">
                                Studying Finance and Management. Might have a coffee addiction.</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
  }

export default Penn;
