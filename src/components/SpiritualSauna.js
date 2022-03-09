import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

// Images

export default function SpiritualSauna() {
  useEffect(() => {
    function removeClass(targetClass) {
      const imageGroup = document.querySelectorAll(".images-well .targetClass");

      imageGroup.forEach((el) => {
        el.classNameList.remove(targetClass);
      });
    }

    const title = document.querySelector(".current-title.nsc-title-small");
    title.addEventListener("click", (e) => {
      window.location.assign("/");
    });

    function getBgColor() {
      const bgColor = gsap.to.dataset.page;
      document.body.classNameName = "";
      document.body.classNameList.add("body-" + bgColor);
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
    <main class="body-spiritual">
      <div data-router-wrapper>
        <div data-router-view data-page="spiritual">
          <main class="scene-wrapper">
            <div class="nsc-page-title">
              <div class="anim-nsc">
                <div class="anim-container page-title-container page-container-spacing">
                  <div class="title-container">
                    <div id="nsc-anim-wipe" class="title-swipe-effect">
                      <h3 class="current-title nsc-title-small anim-title spiritual-title">
                        Night Snack Club
                      </h3>
                    </div>
                    <h3 class="previous-title illustrators-title">
                      Night Snack Club
                    </h3>
                  </div>
                </div>
                <div class="page-title-container spiritual-title">
                  <div class="page-title page-title-js">S</div>
                  <div class="page-title page-title-js">P</div>
                  <div class="page-title page-title-js">I</div>
                  <div class="page-title page-title-js">R</div>
                  <div class="page-title page-title-js">I</div>
                  <div class="page-title page-title-js">T</div>
                  <div class="page-title page-title-js">U</div>
                  <div class="page-title page-title-js">A</div>
                  <div class="page-title page-title-js">L</div>
                </div>
                <div className="page-title-container spiritual-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
                  <div class="page-title page-title-js">S</div>
                  <div class="page-title page-title-js">A</div>
                  <div class="page-title page-title-js">U</div>
                  <div class="page-title page-title-js">N</div>
                  <div class="page-title page-title-js">A</div>
                </div>
              </div>
            </div>
            <div class="background-container">
              <div class="bg-segment spiritual"></div>
              <div class="bg-segment spiritual"></div>
              <div class="bg-segment spiritual"></div>
            </div>
            <div class="images-well spiritual">
              <div class="images-palette">
                <div
                  class="targetClass poster ss-poster inactive-card"
                  loading="eager"
                >
                  {/* <img src="./assets/3_Spirtual_Sauna/19_Poster_Tarot.jpg" /> */}
                </div>
                <div class="targetClass ss-1 inactive-card" loading="eager">
                  {/* <img src="./assets/3_Spirtual_Sauna/20_NightSnackClub_AugustTarot_Spread.png" /> */}
                  <div class="project-title">
                    Tarot Spread Guide <br />
                    for August 2020
                  </div>
                </div>
                <div class="targetClass ss-2 inactive-card" loading="eager">
                  {/* <img src="./assets/3_Spirtual_Sauna/21_NightSnackClub_JulyTarot_Spread.png" /> */}
                  <div class="project-title">
                    Tarot Spread Guide <br />
                    for July 2020
                  </div>
                </div>
                <div class="targetClass ss-3 inactive-card" loading="eager">
                  {/* <img src="./assets/3_Spirtual_Sauna/22_NightSnackClub_SeptemberTarot_Spread.png" /> */}
                  <div class="project-title">
                    Tarot Spread Guide <br />
                    for September 2020
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div class="nav-row__btn back-btn spiritual">
            <Link to="/draw-and-tell">
              <BackButton />
            </Link>
          </div>

          <div class="nav-row__btn forward-btn spiritual">
            <Link to="/blog-worms">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
