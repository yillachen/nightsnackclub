import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

// Images
import {NS_Jenn, NS_Johana, NS_Poster, NS_Shirley, NS_Shirley2} from '../assets/images/allPhotos'

export default function NightSnacks(props) {
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
      const bgColor = "#0b1676";
      document.body.class = "";
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
    <main className="body-nightsnack">
      <div data-router-wrapper>
        <div data-router-view data-page="nightsnack-club">
          <main className="scene-wrapper">
            <div className="nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <h3 className="current-title nsc-title-small anim-title nightsnack-title">
                        Night Snack Club
                      </h3>
                    </div>
                    <h3 className="previous-title health-title">
                      Night Snack Club
                    </h3>
                  </div>
                </div>
                <div className="page-title-container nightsnack-title">
                  <div className="page-title page-title-js">S</div>
                  <div className="page-title page-title-js">N</div>
                  <div className="page-title page-title-js">A</div>
                  <div className="page-title page-title-js">C</div>
                  <div className="page-title page-title-js">K</div>
                </div>
                <div className="page-title-container nightsnack-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
                  <div className="page-title page-title-js">A</div>
                  <div className="page-title page-title-js">T</div>
                  <div className="page-title page-title-js">T</div>
                  <div className="page-title page-title-js">A</div>
                  <div className="page-title page-title-js">C</div>
                  <div className="page-title page-title-js">K</div>
                </div>
              </div>
            </div>
            <div className="background-container">
              <div className="bg-segment nightsnack-club"></div>
              <div className="bg-segment nightsnack-club"></div>
              <div className="bg-segment nightsnack-club"></div>
            </div>
            <div className="images-well nightsnack">
              <div className="images-palette">
                <div className="targetClass poster ns-poster inactive-card">
                  <img src={NS_Poster} alt="Night Snacks" />
                </div>
                <div className="targetClass ns-1 inactive-card">
                  <a href="https://www.nightsnackclub.com/blog/pansy-orange-gin-cordial" rel="noreferrer" target="_blank"><img src={NS_Shirley} alt="Pansy Orange Fin Cordial" /></a>
                  <div className="project-title">Pansy Orange Gin Cordial</div>
                </div>
                <div className="targetClass ns-2 inactive-card">
                  <a href="https://www.nightsnackclub.com/blog/egg-tarts" rel="noreferrer" target="_blank"><img src={NS_Jenn} alt="Hong Kong meets Philly Egg Tarts" /></a>
                  <div className="project-title">
                    My Mom’s HK Style Egg Tarts <br />
                    with A Touch of Philly
                  </div>
                </div>
                <div className="targetClass ns-3 inactive-card">
                  <a href="https://www.nightsnackclub.com/blog/finding-inspiration-dessert-edition" rel="noreferrer" target="_blank"><img src={NS_Johana} alt="Finding Inspiration, Dessert Edition" /></a>
                  <div className="project-title">
                    Finding Inspiration, <br />
                    Dessert Edition
                  </div>
                </div>
                <div className="targetClass ns-4 inactive-card">
                  <a href="https://www.nightsnackclub.com/blog/anh-anhs-salted-eggs" rel="noreferrer" target="_blank"><img src={NS_Shirley2} alt="Anh Anh's   Salted Eggs" /></a>
                  <div className="project-title">Anh Anh’s Salted Eggs</div>
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn snack-attack">
            <Link to="/health-wellness">
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn snack-attack">
            <Link to="/thank-you">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
