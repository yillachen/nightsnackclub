import React from "react";
import { Router, Route } from "react-router-dom";
import "./styles/styles.scss";
import {
  AsianWomxn,
  DrawAndTell,
  HealthWellness,
  Intro,
  NightSnacks,
  SpiritualSauna,
  BlogWorms,
  Outro,
} from "./components/index";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Intro} />
      <Route path="/asian-womxn" component={AsianWomxn} />
      <Route path="/draw-and-tell" component={DrawAndTell} />
      <Route path="/spiritual-sauna" component={SpiritualSauna} />
      <Route path="/blog-worms" component={BlogWorms} />
      <Route path="/health-and-wellness" component={HealthWellness} />
      <Route path="/night-snacks" component={NightSnacks} />
      <Route path="/thank-you" component={Outro} />
    </Router>
  );
}

export default Routes;
