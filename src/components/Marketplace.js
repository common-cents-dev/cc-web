import React from "react";
import heroPic from "../images/Page-Graphic-1.png"
import Public from "./marketplace/Public";
import Policygenius from "./marketplace/Policygenius";
import Fidelity from "./marketplace/Fidelity";
import Lemonade from "./marketplace/Lemonade";
import Webull from "./marketplace/Webull";
import Acorns from "./marketplace/Acorns";
import Discoverit from "./marketplace/Discoverit";
import Vanguard from "./marketplace/Vanguard";
import Coinbase from "./marketplace/Coinbase";
import useScript from './hooks/useScript';

function Marketplace() {
        useScript("NavbarScript.js");

        return(
            <section class="section">
                <section>
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
                        Marketplace
                        </h1>
                        <h2 class="subtitle subtitled">
                        Look at financial products great for students to help you along your journey to financial independence
                        </h2>
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
                </section>
                <div class="container">
                <div class="columns is-variable">
                    <div class="column">

                    <div class="tabs is-boxed is-centered">
                        <ul>
                        <li class="is-active" data-target="product-details">
                            <a>All</a> 
                        </li>
                        <li data-target="investing">
                            <a>Investing</a>
                        </li>
                        <li data-target="insurance">
                            <a>Insurance</a>
                        </li>
                        <li data-target="retirement">
                            <a>Retirement</a>
                        </li>
                        <li data-target="bitcoin">
                            <a>Bitcoin</a>
                        </li>
                        <li data-target="cards">
                            <a>Cards</a>
                        </li>
                        </ul>
                    </div>
                    <div class="px-2" id="tab-content">
                        <div id="product-details">
                            <h3 class="is-size-5 title">Product Details</h3>
                            <div class = "columns">
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Public />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Lemonade />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Policygenius />
                                </div>
                            </div>
                            <div class = "columns">
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Webull />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Vanguard />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Discoverit />
                                </div>
                            </div>
                            <div class = "columns">
                            <   div class = "column is-one-third" data-aos="fade-down">
                                    <Fidelity />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Coinbase />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Acorns />
                                </div>
                            </div>
                        </div>
                        <div id="delivery-information" class="is-hidden">
                        </div>
                        <div id="investing" class="is-hidden">
                            <h3 class="is-size-5 title">Investing</h3>
                            <div class = "columns">
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Public />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Fidelity />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Acorns />
                                </div>
                            </div>
                            <div class = "columns">
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Webull />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Vanguard />
                                </div>
                            </div>
                        </div>
                        <div id="insurance" class="is-hidden">
                            <h3 class="is-size-5 title">Insurance</h3>
                            <div class = "columns">
                            <div class = "column is-one-third" data-aos="fade-down">
                                    <Lemonade />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Policygenius />
                                </div>
                            </div>
                        </div>
                        <div id="retirement" class="is-hidden">
                            <h3 class="is-size-5 title">Retirement</h3>
                            <div class = "columns">
                            <div class = "column is-one-third" data-aos="fade-down">
                                    <Fidelity />
                                </div>
                                <div class = "column is-one-third" data-aos="fade-down">
                                    <Vanguard />
                                </div>
                            </div>
                        </div>
                        <div id="bitcoin" class="is-hidden">
                            <h3 class="is-size-5 title">Bitcoin</h3>
                            <div class = "columns">
                            <div class = "column is-one-third" data-aos="fade-down">
                                    <Coinbase />
                                </div>
                            </div>
                        </div>
                        <div id="cards" class="is-hidden">
                            <h3 class="is-size-5 title">Cards</h3>
                            <div class = "columns">
                            <div class = "column is-one-third" data-aos="fade-down">
                                    <Discoverit />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class = "mx-6 my-4 has-text-centered">
                    <p class = "is-size-7">When evaluating product suggestions, please review the financial institution's terms and conditions. Common Cents Collaborative holds no liability for any damages incurred as a result of any individual actions based on the provided information on our marketplace. Some of our product suggestions are by companies that are partnered with Common Cents Collaborative. Our partnerships have no bias in our process of selecting products to suggest; in tune with our nonprofit mission, we strive to find and suggest the best financial products for students. </p>
                </div>
            </section>
          );
}


export default Marketplace;
