import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import PageTransition from "../js/pages";

// Images

export default function DrawAndTell() {
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
    <main className="body-illustrators">
      <div data-router-wrapper>
        <div data-router-view data-page="illustrators">
          <main className="scene-wrapper">
            <div className="nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <h3 className="current-title nsc-title-small anim-title illustrators-title">
                        Night Snack Club
                      </h3>
                    </div>
                    <h3 className="previous-title asian-title">
                      Night Snack Club
                    </h3>
                  </div>
                </div>
                <div className="page-title-container illustrators-title">
                  <span className="page-title page-title-js">D</span>
                  <span className="page-title page-title-js">R</span>
                  <span className="page-title page-title-js">A</span>
                  <span className="page-title page-title-js">W</span>
                  <span className="page-title page-title-js mobile-only">
                    &nbsp;
                  </span>
                </div>
                <div className="page-title-container illustrators-title">
                  <span className="page-title page-title-js">A</span>
                  <span className="page-title page-title-js">N</span>
                  <span className="page-title page-title-js">D</span>
                  <span className="page-title page-title-js">&nbsp;</span>
                  <span className="page-title page-title-js">T</span>
                  <span className="page-title page-title-js">E</span>
                  <span className="page-title page-title-js">L</span>
                  <span className="page-title page-title-js">L</span>
                </div>
              </div>
            </div>
            <div className="background-container">
              <div className="bg-segment illustrators"></div>
              <div className="bg-segment illustrators"></div>
              <div className="bg-segment illustrators"></div>
            </div>
            <div className="images-well illustrators">
              <div className="images-palette">
                <div
                  className="targetClass poster ii-poster inactive-card"
                  loading="eager"
                >
                  {/* <img src="./assets/2_Draw_And_Tell/8_Poster_Illustrators.png" /> */}
                </div>
                <div className="targetClass ii-1 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/10_Liz.jpeg" /> */}
                  <div className="project-title">
                    Creative Couple Series: <br />
                    Liz & Enle
                  </div>
                </div>
                <div className="targetClass ii-2 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/17_Caitlin.PNG" /> */}
                  <div className="project-title">COOKIE DO</div>
                </div>
                <div className="targetClass ii-3 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/12_Ale.jpg" /> */}
                  <div className="project-title">
                    Meet Alejandro <br />
                    Chen Li
                  </div>
                </div>
                <div className="targetClass ii-4 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/13_Monica.jpg" /> */}
                  <div className="project-title">
                    Tattooing As a Form of <br />
                    Ritual with Eunji
                  </div>
                </div>
                <div className="targetClass ii-5 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/14_Tiffany.png" /> */}
                  <div className="project-title">Abc for Abcs</div>
                </div>
                <div className="targetClass ii-6 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/15_Emily.jpg" /> */}
                  <div className="project-title">
                    The meandering <br />
                    path of emily
                  </div>
                </div>
                <div className="targetClass ii-7 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/16_Leah.png" /> */}
                  <div className="project-title">
                    Leah Maldonado Invites You to <br />
                    Her Digital Playground
                  </div>
                </div>
                <div className="targetClass ii-8 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/11_Enle.jpeg" /> */}
                  <div className="project-title">
                    Creative Couple Series: <br />
                    Liz & Enle
                  </div>
                </div>
                <div className="targetClass ii-9 inactive-card" loading="eager">
                  {/* <img src="./assets/2_Draw_And_Tell/18_Jocelyn.JPG" /> */}
                  <div className="project-title">Behind the Murals</div>
                </div>
                <div
                  className="targetClass ii-10 inactive-card"
                  loading="eager"
                >
                  {/* <img src="./assets/2_Draw_And_Tell/9_Nicolet.jpg" /> */}
                  <div className="project-title">
                    Drawing a Sacai <br />
                    with Nicolet
                  </div>
                </div>
                <div
                  className="targetClass ii-11 drop-shadow inactive-card"
                  loading="eager"
                >
                  {/* <img src="./assets/2_Draw_And_Tell/header-image.png" /> */}
                  <div className="project-title">From NYC to NOLA</div>
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn illustrators">
            <Link to="/asian-womxn">
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn illustrators">
            <Link to="/spiritual-sauna">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
