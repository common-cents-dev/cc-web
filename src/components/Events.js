import React, { useState, useEffect} from 'react';
import heroPic from "../images/Page-Graphic-1.png"
import useScript from './hooks/useScript';
import EventList from './events/EventList';

function Events() {
        useScript("NavbarScript.js");
        const [modalDisplay, showModal] = useState(false);

        useEffect(() => {
            if (modalDisplay) {
                document.getElementById('modal').classList.add('is-active');
            } else {
                document.getElementById('modal').classList.remove('is-active');
            }
        }, [modalDisplay]);

        return(
            <section class="section">
                {/* <section>
                <div class="hero-body is-small" style = {{"margin-top": "-2em"}}>
                <div class="container">
                    <div class="columns  is-vcentered reverse-columns">
                        <div data-aos="fade-right" class="column
                        is-10-mobile is-offset-1-mobile
                        is-10-tablet is-offset-1-tablet
                        is-5-desktop is-offset-1-desktop
                        is-5-widescreen is-offset-1-widescreen
                        is-5-fullhd is-offset-1-fullhd">
                        <h1 class="title titled is-1 mb-6">
                        Events
                        </h1>
                        <h2 class="subtitle subtitled">
                        </h2>
                        <div class="buttons">
                            <button class="button" onClick={() => showModal(true)}>[Placeholder]</button>
                        </div>
                    </div>
                    <div data-aos="fade-down" class="column
                    is-10-mobile is-offset-1-mobile
                    is-10-tablet is-offset-1-tablet
                    is-4-desktop is-offset-1-desktop" data-aos="fade-up">
                        <figure class="image is-square">
                        <img src={heroPic} />
                        </figure>
                    </div>

                    </div>
                </div>
                </div>
                </section> */}
                    <div id = "modal" class = "modal">
                        <div class="modal-background"></div>
                        <div class="modal-card">
                            <header class="modal-card-head">
                                <p class="modal-card-title"></p>
                                <button class = "delete" aria-label="close" onClick={() => showModal(false)}></button>
                            </header>
                            <section class="modal-card-body">
                                <div class="content">
                                    <h2>CC Selection Process</h2>
                                    <p class = "py-2">We search for products with the goal of finding the ones that are suitable for students. We consider the following three major factors when suggesting a product</p>
                                    <h4>Costs</h4>
                                    <p>Costs are a huge barrier for students, as we're getting our first internships and jobs, and slowly achieving financial independence. Even products with a "low" $5 monthly maintenance fee can add up to be a large cost. We look for products with no per-transaction, monthly, or annual fees while keeping an eye out for hidden fees.</p>
    
                                    <h4>Ease of Access</h4>
                                    <p>We consider how easy it is for a student to acquire and use the product. Some things we look out for are high entry requirements, a quick application process, and a well-designed web interface or app. We also consider how widely available the product is, as well as how difficult and lengthy the process of purchasing the product is.</p>
                                    <h4>Student-Centricity</h4>
                                    <p>An aspect we always try to analyze about a product is how much the creators were thinking of students while building the product. For example, is the product specifically designed for students and young adults, or generally for everyone? Does the company's mission align with Common Cents or promote good student-related behaviors?</p>
                                </div>
                            </section>
                            {/* <footer class="modal-card-foot">
                            <button class="button" onClick={() => showModal(false)}>Cancel</button>
                            </footer> */}
                        </div>
                    </div>
                <div class="container">
                    <EventList/>
                    {/* <div class = "mx-6 my-4 has-text-centered">
                        <p class = "is-size-7">When evaluating product suggestions, please review the financial institution's terms and conditions. Common Cents Collaborative ("Common Cents") holds no liability for any damages incurred as a result of any individual actions based on the provided information on our marketplace. Some of our product suggestions are by companies that are partnered with Common Cents Collaborative. Our partnerships have no bias in our process of selecting products to suggest; in tune with our nonprofit mission, we strive to find and suggest financial products that are suitable for students. </p>
                    </div> */}
                </div>
            </section>
          );
}


export default Events;
