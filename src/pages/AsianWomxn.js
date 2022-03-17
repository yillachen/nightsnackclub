import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

// Images
import {
  AW_Caitlin,
  AW_Jeannie,
  AW_Jenn,
  AW_JudyOscar,
  AW_Nicole,
  AW_Poster,
  AW_Robyn,
} from "../assets/images/allPhotos";

export default function AsianWomxn(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    document.body.className = "";
    document.body.classList.add("body-" + bgColor);
    return "body-" + bgColor;
  }

  useEffect(() => {
    appTransitions();
  });

  return (
    <main className={getBgColor()}>
      <div data-router-wrapper>
        <div data-router-view data-page="asian-womxn">
          <main className="scene-wrapper">
            <div className="nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="background-container">
                    <div className="bg-segment asian-womxn" />
                    <div className="bg-segment asian-womxn" />
                    <div className="bg-segment asian-womxn" />
                  </div>
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <Link to="/">
                        <h3 className="current-title nsc-title-small anim-title asian-title">
                          Night Snack Club
                        </h3>
                      </Link>
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
                </div>
                <div className="page-title-container asian-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
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
            <div className="images-well asian-womxn">
              <div className="images-palette">
                <div
                  className="targetClass poster aw-poster inactive-card"
                  loading="eager"
                >
                  <img src={AW_Poster} alt="Asian Womxn" />
                </div>

                <div className="targetClass aw-1 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/cookie-do"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_Caitlin} alt="Cookie Do" />
                  </a>
                  <div className="project-title">COOKIE DO</div>
                </div>
                <div className="targetClass aw-2 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/the-contemplative-art-of-suminagashi-with-jenn-chen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_Jenn} alt="Jenn Chen" />
                  </a>
                  <div className="project-title">
                    The Contemplative
                    <br />
                    Art of Suminagashi
                    <br />
                    with Jenn Chen
                  </div>
                </div>
                <div className="targetClass aw-3 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/jeannie-huang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_Jeannie} alt="Jeannie Huang" />
                  </a>
                  <div className="project-title">
                    The Ephemeral AND Intangible <br />
                    Art of Wearable Florals with <br />
                    Jeannie Huang
                  </div>
                </div>
                <div className="targetClass aw-4 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/creative-couple-series-judy-and-oscar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_JudyOscar} alt="Judy & Oscar" />
                  </a>
                  <div className="project-title">
                    Creative Couple Series: <br />
                    Judy & Oscar
                  </div>
                </div>
                <div className="targetClass aw-5 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/sewing-circle-with-nicole-liao"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_Nicole} alt="Nicole Liao" />
                  </a>
                  <div className="project-title">
                    Sewing Circle <br />
                    with Nicole Liao
                    <br />
                    Third line test
                  </div>
                </div>
                <div className="targetClass aw-6 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/smoothing-out-hard-corners-in-clay"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AW_Robyn} alt="Corners in Clay" />
                  </a>
                  <div className="project-title">
                    Smoothing Out Hard <br />
                    Corners in Clay
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn asian-womxn">
            <Link
              to={{
                pathname: "/",
                from: "asian-womxn",
              }}
            >
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn asian-womxn">
            <Link
              to={{
                pathname: "/illustrators",
                from: "asian-womxn",
              }}
            >
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
