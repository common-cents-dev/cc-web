import React from "react";
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";
import Marketplace from "./components/Marketplace";
import Housing from "./components/Housing";
import Penn from "./chapters/Penn";
import Cornell from "./chapters/Cornell";
import JHU from "./chapters/JHU";
import Yale from "./chapters/Yale";
import NYU from "./chapters/NYU";
import Princeton from "./chapters/Princeton";
import Binghamton from "./chapters/Binghamton";


const trackingId = "UA-178272831-1"; // Replace with your Google Analytics tracking ID
const history = createBrowserHistory();

ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-178272831-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
    // Initialize google analytics page view tracking
    
    const history = createBrowserHistory();
    history.listen(location => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/events" exact component={() => <Events />} />
          <Route path="/marketplace" exact component={() => <Marketplace />} />
          <Route path="/penn" exact component={() => <Penn />} />
          <Route path="/cornell" exact component={() => <Cornell />} />
          <Route path="/jhu" exact component={() => <JHU />} />
          <Route path="/nyu" exact component={() => <NYU />} />
          <Route path="/yale" exact component={() => <Yale />} />
          <Route path="/housing" exact component={() => <Housing />} />
          {/* <Route path="/princeton" exact component={() => <Princeton />} />
          <Route path="/binghamton" exact component={() => <Binghamton />} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;