import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

// Images
import Jeannie from "../assets/images/1_Asian_Womxn/5_Jeannie.jpg";
import Caitlin from "../assets/images/1_Asian_Womxn/7_Caitlin.JPG";
import Jenn from "../assets/images/1_Asian_Womxn/6_Jenn.jpg";
import JudyOscar from "../assets/images/1_Asian_Womxn/4_Judy.png";
import Nicole from "../assets/images/1_Asian_Womxn/3_Nicole.JPG";
import Robyn from "../assets/images/1_Asian_Womxn/2_Robyn.JPG";
import Poster from "../assets/images/1_Asian_Womxn/1_Poster_Asian_Womxn.png";

export default function AsianWomxn() {
  useEffect(() => {
    function removeClass(targetClass) {
      const imageGroup = document.querySelectorAll(".images-well .targetClass");

      imageGroup.forEach((el) => {
        el.classList.remove(targetClass);
      });
    }

    const title = document.querySelector(".current-title.nsc-title-small");
    title.addEventListener("click", (e) => {
      window.location.assign("/");
    });

    function getBgColor() {
      const bgColor = gsap.to.dataset.page;
      document.body.className = "";
      document.body.classList.add("body-" + bgColor);
    }

    function projectTooltip() {
      var tooltip = document.querySelectorAll(".project-title");
      document.addEventListener("mousemove", fn, false);

      function fn(e) {
        for (var i = tooltip.length; i--; ) {
          let offset_x = e.offsetX;
          let offset_y = e.offsetY + 45;
          tooltip[i].style.left = offset_x + "px";
          tooltip[i].style.top = offset_y + "px";
        }
      }
    }

    const tl = gsap.timeline({
      onComplete: () => {
        getBgColor();
        removeClass("inactive-card");
        // followTheMouse();
        projectTooltip();
        // done();
      },
    });

    tl
      // GENERAL TITLE->IN
      .from(
        ".page-title-js",
        {
          duration: 1,
          ease: "power4",
          yPercent: -120,
          stagger: 0.045,
          delay: 0.3,
        },
        0.0
      )

      // BG SEGMENTS
      .fromTo(
        ".bg-segment",
        {
          width: "0%",
        },
        {
          duration: 2.5,
          width: "100%",
          ease: "power4",
          stagger: 0.25,
        },
        0.0
      )

      // PAGE TITLE SWIPE
      .fromTo(
        "#nsc-anim-wipe",
        {
          width: "0%",
        },
        {
          duration: 2.5,
          width: "100%",
          ease: "power4",
        },
        0.0
      );
  });

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
                {/* </div>
                <div className="page-title-container asian-title mobile-only"> */}
                  <h2 className="page-title page-title-js mobile-only">
                    &nbsp;
                  </h2>
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
                  {/* <img src={Caitlin} alt="Cookie Do" /> */}
                  <div className="project-title">COOKIE DO</div>
                </div>
                <div className="targetclassName aw-2 inactive-card">
                  {/* <img src={Jenn} alt="Jenn Chen" /> */}
                  <div className="project-title">
                    The Contemplative <br />
                    Art of Suminagashi with <br />
                    Jenn Chen
                  </div>
                </div>
                <div className="targetclassName aw-3 inactive-card">
                  {/* <img src={Jeannie} alt="Jeannie Huang" /> */}
                  <div className="project-title">
                    The Ephemeral AND Intangible <br />
                    Art of Wearable Florals with <br />
                    Jeannie Huang
                  </div>
                </div>
                <div className="targetclassName aw-4 inactive-card">
                  {/* <img src={JudyOscar} alt="Judy & Oscar" /> */}
                  <div className="project-title">
                    Creative Couple Series: <br />
                    Judy & Oscar
                  </div>
                </div>
                <div className="targetclassName aw-5 inactive-card">
                  {/* <img src={Nicole} alt="Nicole Liao" /> */}
                  <div className="project-title">
                    Sewing Circle <br />
                    with Nicole Liao
                    <br />
                    Third line test
                  </div>
                </div>
                <div className="targetclassName aw-6 inactive-card">
                  {/* <img src={Robyn} alt="Corners in Clay" /> */}
                  <div className="project-title">
                    Smoothing Out Hard <br />
                    Corners in Clay
                  </div>
                </div>
                <div className="targetclassName poster aw-poster inactive-card">
                  {/* <img src={Poster} alt="Asian Womxn" /> */}
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
