import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer is-primary">
                  <div class="content">
                      <div class="card column is-half is-offset-one-quarter">
                            <div class="card-content">
                                <form name="member" method = "post" netlify>
                                    <input type="hidden" name="form-name" value="member" />
                                    <p class="title">
                                    Want to become a member?
                                    </p>
                                    <p class="subtitle">
                                    Sign up for our newsletter.
                                    </p>
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left">
                                                <input class="input" type="text" name = "first_name" placeholder="First Name"/>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                        </p>
                                        </div>
                                        
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left has-icons-right">
                                                <input class="input" type="text" name = "last_name" placeholder="Last Name" />
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class = "py-4">
                                        <div class="field">
                                            <p class="control is-expanded has-icons-left has-icons-right">
                                                <input class="input" type="email" name = "email" placeholder="Email"/>
                                                <span class="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="field-body">
                                        <div class = "field">
                                            <div class="control is-expanded has-icons-left">
                                                <div class="select is-fullwidth">
                                                    <select name = "class">
                                                    <option disabled selected>Graduation Year</option>
                                                    <option>2025</option>
                                                    <option>2024</option>
                                                    <option>2023</option>
                                                    <option>2022</option>
                                                    </select>
                                                </div>
                                                <span class="icon is-left">
                                                    <i class="fas fa-graduation-cap"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class = "field">
                                            <div class="control is-expanded has-icons-left is-fullwidth">
                                                <div class="select is-fullwidth">
                                                    <select name = "chapter">
                                                    <option disabled selected>School</option>
                                                    <option>Binghamton</option>
                                                    <option>Cornell</option>
                                                    <option>Johns Hopkins</option>
                                                    <option>New York University</option>
                                                    <option>Princeton</option>
                                                    <option>UPenn</option>
                                                    <option>Yale</option>
                                                    </select>
                                                </div>
                                                <span class="icon is-left">
                                                    <i class="fas fa-graduation-cap"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>

                                    <div class = "field">
                                        <div class = "control has-text-centered">
                                            <button class="button is-link">Join</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="container has-text-centered" style = {{"margin-bottom": "-4em"}}>
                            <span class="icon is-large">
                                <i class="fab fa-facebook-square fa-2x"></i>
                            </span>
                            <span class="icon is-large">
                                <i class="fab fa-instagram fa-2x"></i>
                            </span>
                            <span class="icon is-large">
                                <i class="fab fa-linkedin fa-2x"></i>
                            </span>
                            <br></br>
                            <div class = "py-2">
                                <p class = "is-size-7">Common Cents Collaborative ("Common Cents") is not a financial advisor, investment advisor, legal advisor, accountant, or other certified financial professional. All financial opinions expressed by Common Cents Collaborative are intended for informational purposes and should not be viewed as legal or financial advice.</p>
                            </div>
                            <div>
                                <p class = "is-size-7">Looking for <b>Penny Harvest</b> (Common Cents New York)? Learn more about it <a href = "https://web.archive.org/web/20150404013854/http://pennyharvest.org/contact-us/staff/">here</a>.</p>
                            </div>
                        </div>
                    </div>
            </footer>
        );
    }
}
export default Footer;