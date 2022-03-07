import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import PageTransition from "../js/pages";

// Images
import Jeannie from "../assets/images/1_Asian_Womxn/5_Jeannie.jpg";
import Caitlin from "../assets/images/1_Asian_Womxn/7_Caitlin.JPG";
import Jenn from "../assets/images/1_Asian_Womxn/6_Jenn.jpg";
import JudyOscar from "../assets/images/1_Asian_Womxn/4_Judy.png";
import Nicole from "../assets/images/1_Asian_Womxn/3_Nicole.JPG";
import Robyn from "../assets/images/1_Asian_Womxn/2_Robyn.JPG";
import Poster from "../assets/images/1_Asian_Womxn/1_Poster_Asian_Womxn.png";

export default function AsianWomxn() {

  return (
    <main className="body-womxn">
      <div data-router-wrapper>
        <div data-router-view data-page="asian-womxn">
          <main className="scene-wrapper">
            <div className="nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <h3 className="current-title nsc-title-small anim-title asian-title">
                        Night Snack Club
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="page-title-container asian-title">
                  <h2 className="page-title page-title-js">
                    <span>A</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>S</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>I</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>A</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>N</span>
                  </h2>
                  <h2 className="page-title page-title-js mobile-only">
                    <span>&nbsp</span>
                  </h2>
                </div>
                <div className="page-title-container asian-title">
                  <h2 className="page-title page-title-js">
                    <span>W</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>O</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>M</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>X</span>
                  </h2>
                  <h2 className="page-title page-title-js">
                    <span>N</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="background-container">
              <div className="bg-segment asian-womxn"></div>
              <div className="bg-segment asian-womxn"></div>
              <div className="bg-segment asian-womxn"></div>
            </div>
            <div className="images-well asian-womxn">
              <div className="images-palette">
                <div className="targetclassName aw-1 inactive-card">
                  <img src={Caitlin} alt="Cookie Do" />
                  <div className="project-title">COOKIE DO</div>
                </div>
                <div className="targetclassName aw-2 inactive-card">
                  <img src={Jenn} alt="Jenn Chen" />
                  <div className="project-title">
                    The Contemplative <br />
                    Art of Suminagashi with <br />
                    Jenn Chen
                  </div>
                </div>
                <div className="targetclassName aw-3 inactive-card">
                  <img src={Jeannie} alt="Jeannie Huang" />
                  <div className="project-title">
                    The Ephemeral AND Intangible <br />
                    Art of Wearable Florals with <br />
                    Jeannie Huang
                  </div>
                </div>
                <div className="targetclassName aw-4 inactive-card">
                  <img src={JudyOscar} alt="Judy & Oscar" />
                  <div className="project-title">
                    Creative Couple Series: <br />
                    Judy & Oscar
                  </div>
                </div>
                <div className="targetclassName aw-5 inactive-card">
                  <img src={Nicole} alt="Nicole Liao" />
                  <div className="project-title">
                    Sewing Circle <br />
                    with Nicole Liao
                    <br />
                    Third line test
                  </div>
                </div>
                <div className="targetclassName aw-6 inactive-card">
                  <img src={Robyn} alt="Corners in Clay" />
                  <div className="project-title">
                    Smoothing Out Hard <br />
                    Corners in Clay
                  </div>
                </div>
                <div className="targetclassName poster aw-poster inactive-card">
                  <img src={Poster} alt="Asian Womxn" />
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn asian-womxn">
            <Link to="/home">
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn asian-womxn">
            <Link to="/draw-and-tell">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
