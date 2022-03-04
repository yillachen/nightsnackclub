import React from "react";
import { Router, Routes, Route } from "react-router";
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

function AllRoutes() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" component={Intro} />
          <Route path="/home" element={Intro} />

          <Route exact path="/asian-womxn" element={AsianWomxn} />
          <Route exact path="/draw-and-tell" element={DrawAndTell} />
          <Route exact path="/spiritual-sauna" element={SpiritualSauna} />
          <Route exact path="/blog-worms" element={BlogWorms} />
          <Route exact path="/health-and-wellness" element={HealthWellness} />
          <Route exact path="/night-snacks" element={NightSnacks} />
          <Route exact path="/thank-you" element={Outro} />
        </Routes>
      </Router>
  );
}

export default AllRoutes;
