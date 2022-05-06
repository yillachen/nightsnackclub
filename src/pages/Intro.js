import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import StartButton from "../components/StartButton";
// import Animation from "../assets/images/2020_original-hevc-safari.mp4";
import Animation2 from "../assets/images/2020_original-vp9-chrome.webm";
import { introTransitions } from "../js/transitions";

export default function Intro(props) {
  useEffect(() => {
    introTransitions();
  });

  return (
    <main className="body-index">
      <Helmet>
        <meta name="theme-color" content="#dddcff" />
      </Helmet>
      <div className="top-gradient" />
      <main className="scene-wrapper intro">
        <div className="background-container">
          <div className="bg-segment index"></div>
        </div>
        <div className="scene-container">
          <div className="anim-nsc">
            <div className="anim-container">
              <span className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                Night
              </span>
              <span className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                Snack
              </span>
              <span className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                Club
              </span>
            </div>
          </div>

          <div className="intro-video">
            <video muted autoPlay playsInline style={{ pointerEvents: "none" }}>
              {/* <source src="https://res.cloudinary.com/y-chen/video/upload/v1651853427/2020_original-hevc-safari_bih7rl.mp4" type="video/mp4" /> */}
              <source src={Animation2} type="video/mp4" />
            </video>
          </div>
          <div className="year-in-review">
            <div className="anim-yir">
              <div className="anim-container yir-cont">
                <h3 className="anim-subtitle nsc-title-large page-title-js">
                  YEAR
                </h3>
                <h3 className="anim-subtitle nsc-title-large page-title-js">
                  &nbsp;
                </h3>
                <h3 className="anim-subtitle nsc-title-large page-title-js">
                  IN
                </h3>
              </div>
              <div className="anim-container yir-cont">
                <h3 className="anim-subtitle nsc-title-large page-title-js">
                  REVIEW
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn start-btn">
        <Link
          to={{
            pathname: "/asian-womxn",
            from: "index",
          }}
        >
          <StartButton />
        </Link>
      </div>
      <script src="js/app.js" type="module"></script>
    </main>
  );
}
