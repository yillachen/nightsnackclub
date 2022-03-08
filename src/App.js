import React from "react";
import { Switch, Route } from "react-router-dom";
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
import PageTransition from './js/pages'

const routes = [
  { path: "/", name: "Home", component: Intro },
  { path: "/home", name: "Home", component: Intro },
  { path: "/asian-womxn", name: "Asian Womxn", component: AsianWomxn },
  { path: "/draw-and-tell", name: "Draw and Tell", component: DrawAndTell },
  {
    path: "/spiritual-sauna",
    name: "Spiritual Sauna",
    component: SpiritualSauna,
  },
  { path: "/blog-worms", name: "Blog Worms", component: BlogWorms },
  {
    path: "/health-and-wellness",
    name: "Health and Wellness",
    component: HealthWellness,
  },
  { path: "/night-snacks", name: "Night Snacks", component: NightSnacks },
  { path: "/thank-you", name: "Thank you", component: Outro },
];

export default function App() {
  return (
    <Switch>
      {routes.map(({ path, component }, index) => (
        <Route key={index} exact path={path} component={component} />
      ))}
    </Switch>
  );
}
