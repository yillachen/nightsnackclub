import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

// Images

export default function BlogWorms() {
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
          width: "100%",
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
    <main className="body-blog">
      <div data-router-wrapper>
        <div data-router-view data-page="blog">
          <main className="scene-wrapper">
            <div className="nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <h3 className="current-title nsc-title-small anim-title blog-title">
                        Night Snack Club
                      </h3>
                    </div>
                    <h3 className="previous-title spiritual-title">
                      Night Snack Club
                    </h3>
                  </div>
                </div>
                <div className="page-title-container blog-title">
                  <div className="page-title page-title-js">B</div>
                  <div className="page-title page-title-js">L</div>
                  <div className="page-title page-title-js">O</div>
                  <div className="page-title page-title-js">G</div>
                  </div>
                <div className="page-title-container blog-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
                  <div className="page-title page-title-js">W</div>
                  <div className="page-title page-title-js">O</div>
                  <div className="page-title page-title-js">R</div>
                  <div className="page-title page-title-js">M</div>
                  <div className="page-title page-title-js">S</div>
                </div>
              </div>
            </div>
            <div className="background-container">
              <div className="bg-segment blog"></div>
              <div className="bg-segment blog"></div>
              <div className="bg-segment blog"></div>
            </div>
            <div className="images-well blog">
              <div className="images-palette">
                <div className="targetClass poster bw-poster inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/23_Poster_Blogworms.png" /> */}
                </div>
                <div className="targetClass bw-1 inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/24_Nicolet.jpg" /> */}
                  <div className="project-title">
                    Drawing a Sacai <br />
                    with Nicolet
                  </div>
                </div>
                <div className="targetClass bw-2 inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/25_Leah.png" /> */}
                  <div className="project-title">
                    Leah Maldonado Invites You to <br />
                    Her Digital Playground
                  </div>
                </div>
                <div className="targetClass bw-3 inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/26_Johana.jpg" /> */}
                  <div className="project-title">
                    Sourdough Diaries: <br />
                    Brownies
                  </div>
                </div>
                <div className="targetClass bw-4 inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/27_Nicole.jpg" /> */}
                  <div className="project-title">
                    Sewing Circle with <br />
                    Nicole Liao
                  </div>
                </div>
                <div className="targetClass bw-5 inactive-card">
                  {/* <img src="./assets/4_Blog_Worms/28_Duy.jpg" /> */}
                  <div className="project-title">
                    A Collector: Duy’s Comme <br />
                    des Garçons Collection
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn blog">
            <Link to="/spiritual-sauna">
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn blog">
            <Link to="/health-wellness">
              <NextButton />
            </Link>
          </div>
        </div>
      </div>

      <script src="js/app.js" type="module"></script>
    </main>
  );
}
