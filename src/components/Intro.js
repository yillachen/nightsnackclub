import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import StartButton from "./StartButton";
import Animation from "../assets/images/2020_original-hevc-safari.mp4";
import Animation2 from "../assets/images/2020_original-vp9-chrome.webm";

export default function Intro(props) {
  useEffect(() => {
    gsap.from(".page-title-js", {
      duration: 1,
      ease: "power4",
      yPercent: -120,
      stagger: 0.045,
      delay: 0.3,
    });
  });

  return (
    <main className="body-index">
      <div data-router-wrapper>
        <div data-router-view data-page="index">
          <div className="top-gradient"></div>
          <main className="scene-wrapper">
            <div className="background-container">
              <div className="bg-segment index"></div>
            </div>
            <div className="scene-container">
              <div className="intro-container-spacing">
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
              </div>
              <div className="intro-video">
                <video
                  muted
                  autoPlay
                  playsInline
                  style={{ pointerEvents: "none" }}
                >
                  <source src={Animation} type="video/mp4" />
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
            <Link to="/asian-womxn">
              <StartButton />
            </Link>
          </div>
        </div>
      </div>
      <script src="js/app.js" type="module"></script>
    </main>
  );
}
