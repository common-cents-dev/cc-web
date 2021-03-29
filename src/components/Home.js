import React from "react";
import "bulma";
import tree from "../images/sprouting-tree.png"
import sampleEvent from "../images/linkedin_event.png"
import chaptersMap from "../images/chapters_map.jpeg"
import marketplacePic from "../images/marketplace_demo.png"
import EventsCalendar from "./EventsCalendar.js"
import BoxKPI from "./BoxKPI.js"

class Home extends React.Component {
  render() {
    return (
        <div>            
            <section class="hero is-white is-fullheight">
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
                                Financial freedom within the reach of every student</h1>
                                <h2 class=" subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
                                Empowering students to manage their money and reach financial independence.
                                </h2>
                                <div class="buttons">
                                {/* <button class="button is-black">Download</button>
                                <button class="button">Join</button> */}
                                </div>
                            </div>
                            <div data-aos="fade-right" class="column
                            is-10-mobile
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
                 {/* <div class="hero-body is-primary">
                    <div class="container has-text-centered">
                        <div class="columns is-desktop is-vcentered">
                            <div class="column is-half ml-4">
                                <h1 class="title">Financial freedom within the reach of every student</h1>
                                <h2 class="subtitle">Empowering students to manage their money and reach financial independence</h2>       
                            </div>
                            <div class="column is-half">
                                <figure class="image">
                                    <img src={tree} alt = "s"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>  */}

            </section>
            
            <section class="hero is-small is-white" style = {{"margin-top": "-2em"}}>
                <div class="hero-body">
                    <div class="container">
                        <h1 class = "titled is-1 title has-text-centered">What We Do</h1>
                        <h2 class = "subtitled is-3 subtitle has-text-centered py-2">We are redefining personal finance education through:</h2>
                        <div class="columns is-vcentered">
                            <div data-aos="fade-left" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-4-desktop is-offset-1-desktop
                            is-4-widescreen is-offset-1-widescreen
                            is-4-fullhd is-offset-1-fullhd py-4">
                                <figure class="image">
                                <img src={chaptersMap}/>
                                </figure>
                            </div>
                            <div data-aos="fade-down" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-5-desktop is-offset-1-desktop
                            is-5-widescreen is-offset-1-widescreen
                            is-5-fullhd is-offset-1-fullhd py-4">
                                <h1 class="subtitled subtitle is-3 mb-6">
                                Campus Chapters
                                </h1>
                                <h2 class="subtitled subtitle">
                                We create a community through word of mouth and social proof, bringing new awareness to financial literacy.
                                </h2>
                            </div>
                            
                        </div>
                        <br></br>
                        <div class="columns  is-vcentered" style = {{"padding-bottom": "2em"}}>

                    <div data-aos="fade-down" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-5-desktop is-offset-1-desktop
                    is-5-widescreen is-offset-1-widescreen
                    is-5-fullhd is-offset-1-fullhd py-4">
                       <h1 class="subtitled subtitle is-3 mb-6 ">
                                Product Suggestions
                                </h1>
                                <h2 class="subtitled subtitle">
                                We showcase useful financial products via our marketplace that will allow students to start taking financial action.
                                </h2>
                    </div>
                    <div data-aos="fade-left" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-4-desktop is-offset-1-desktop
                    is-4-widescreen is-offset-1-widescreen
                    is-4-fullhd is-offset-1-fullhd py-4">
                        <figure class="image">
                        <img src={marketplacePic}/>
                        </figure>
                    </div>

                    </div>
                        <div class="columns  is-vcentered">
                            <div data-aos="fade-left" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-4-desktop is-offset-1-desktop
                            is-4-widescreen is-offset-1-widescreen
                            is-4-fullhd is-offset-1-fullhd py-2">
                                <div class = "card">
                                    <div class = "card-content">
                                <figure class="image is-square">
                                <img src={sampleEvent}/>
                                </figure>
                                </div>
                                </div>
                            </div>
                            <div data-aos="fade-down" class="column
                            is-10-mobile is-offset-1-mobile
                            is-10-tablet is-offset-1-tablet
                            is-5-desktop is-offset-1-desktop
                            is-5-widescreen is-offset-1-widescreen
                            is-5-fullhd is-offset-1-fullhd py-2">
                                <h1 class="subtitled subtitle is-3 mb-6">
                                User-Centric Resources
                                </h1>
                                <h2 class="subtitled subtitle">
                                We host interesting events and post media content to promote relevant personal finance content and meet students where they are.
                                </h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <hr></hr>

            <section class="hero is-white has-text-centered">
                <h1 class = "title is-1 has-text-centered">Our Impact</h1>
                <div class="hero-body">
                <div class="container">
                    <BoxKPI />
                </div>
                </div>
            </section>

            <br></br><hr></hr>

            <section class="hero is-white has-text-centered">
                <h1 class = "title is-1">Upcoming Events</h1>
                <div class="hero-body">
                <div class="container">
               
                <EventsCalendar />
             
                </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Home;