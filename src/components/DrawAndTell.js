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
                    <h3 className="previous-title asian-title">Night Snack Club</h3>
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
                <div className="targetClass ii-10 inactive-card" loading="eager">
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
            <a href="asian-womxn.html">
              <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
                <path
                  d="M147.75 47.7273C147.75 59.8707 140.011 71.1862 126.825 79.5773C113.666 87.9514 95.3489 93.2045 75 93.2045C54.6511 93.2045 36.3343 87.9514 23.175 79.5773C9.98893 71.1862 2.25 59.8707 2.25 47.7273C2.25 35.5838 9.98893 24.2683 23.175 15.8772C36.3343 7.50311 54.6511 2.25 75 2.25C95.3489 2.25 113.666 7.50311 126.825 15.8772C140.011 24.2683 147.75 35.5838 147.75 47.7273Z"
                  className="btn-stroke"
                  stroke-width="4.5"
                />
                <path
                  d="M34.0577 46.125V40.28H39.2027C39.6927 40.28 40.1593 40.3267 40.6027 40.42C41.0693 40.49 41.4777 40.63 41.8277 40.84C42.1777 41.05 42.4577 41.3417 42.6677 41.715C42.8777 42.0883 42.9827 42.5667 42.9827 43.15C42.9827 44.2 42.6677 44.9583 42.0377 45.425C41.4077 45.8917 40.6027 46.125 39.6227 46.125H34.0577ZM28.5627 36.01V61H40.6727C41.7927 61 42.8777 60.86 43.9277 60.58C45.001 60.3 45.946 59.8683 46.7627 59.285C47.6027 58.7017 48.2677 57.955 48.7577 57.045C49.2477 56.1117 49.4927 55.015 49.4927 53.755C49.4927 52.1917 49.1077 50.8617 48.3377 49.765C47.591 48.645 46.4477 47.8633 44.9077 47.42C46.0277 46.8833 46.8677 46.195 47.4277 45.355C48.011 44.515 48.3027 43.465 48.3027 42.205C48.3027 41.0383 48.1043 40.0583 47.7077 39.265C47.3343 38.4717 46.7977 37.8417 46.0977 37.375C45.3977 36.885 44.5577 36.535 43.5777 36.325C42.5977 36.115 41.5127 36.01 40.3227 36.01H28.5627ZM34.0577 56.73V49.87H40.0427C41.2327 49.87 42.1893 50.15 42.9127 50.71C43.636 51.2467 43.9977 52.1567 43.9977 53.44C43.9977 54.0933 43.881 54.63 43.6477 55.05C43.4377 55.47 43.146 55.8083 42.7727 56.065C42.3993 56.2983 41.9677 56.4733 41.4777 56.59C40.9877 56.6833 40.4743 56.73 39.9377 56.73H34.0577ZM58.8062 51.34L62.0612 42.17H62.1312L65.2812 51.34H58.8062ZM59.3312 36.01L49.8812 61H55.4112L57.3712 55.435H66.7162L68.6062 61H74.3112L64.9662 36.01H59.3312ZM92.4262 44.41H97.7462C97.5828 42.9633 97.1862 41.68 96.5562 40.56C95.9262 39.44 95.1212 38.5067 94.1412 37.76C93.1845 36.99 92.0878 36.4067 90.8512 36.01C89.6378 35.6133 88.3428 35.415 86.9662 35.415C85.0528 35.415 83.3262 35.7533 81.7862 36.43C80.2695 37.1067 78.9862 38.04 77.9362 39.23C76.8862 40.42 76.0812 41.82 75.5212 43.43C74.9612 45.0167 74.6812 46.7433 74.6812 48.61C74.6812 50.43 74.9612 52.1333 75.5212 53.72C76.0812 55.2833 76.8862 56.6483 77.9362 57.815C78.9862 58.9817 80.2695 59.9033 81.7862 60.58C83.3262 61.2333 85.0528 61.56 86.9662 61.56C88.5062 61.56 89.9178 61.3267 91.2012 60.86C92.4845 60.3933 93.6045 59.7167 94.5612 58.83C95.5178 57.9433 96.2878 56.87 96.8712 55.61C97.4545 54.35 97.8162 52.9383 97.9562 51.375H92.6362C92.4262 53.055 91.8428 54.4083 90.8862 55.435C89.9528 56.4617 88.6462 56.975 86.9662 56.975C85.7295 56.975 84.6795 56.7417 83.8162 56.275C82.9528 55.785 82.2528 55.1433 81.7162 54.35C81.1795 53.5567 80.7828 52.67 80.5262 51.69C80.2928 50.6867 80.1762 49.66 80.1762 48.61C80.1762 47.5133 80.2928 46.4517 80.5262 45.425C80.7828 44.3983 81.1795 43.4883 81.7162 42.695C82.2528 41.8783 82.9528 41.2367 83.8162 40.77C84.6795 40.28 85.7295 40.035 86.9662 40.035C87.6428 40.035 88.2845 40.1517 88.8912 40.385C89.5212 40.595 90.0812 40.8983 90.5712 41.295C91.0612 41.6917 91.4695 42.1583 91.7962 42.695C92.1228 43.2083 92.3328 43.78 92.4262 44.41ZM101.009 36.01V61H106.504V52.95L109.654 49.765L117.179 61H124.074L113.364 45.88L123.129 36.01H116.269L106.504 46.37V36.01H101.009Z"
                  className="btn-fill"
                />
              </svg>
            </a>
          </div>

          <div className="nav-row__btn forward-btn illustrators">
            <a href="spiritual.html">
              <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
                <path
                  d="M147.75 47.7273C147.75 59.8707 140.011 71.1862 126.825 79.5773C113.666 87.9514 95.3489 93.2045 75 93.2045C54.6511 93.2045 36.3343 87.9514 23.175 79.5773C9.98893 71.1862 2.25 59.8707 2.25 47.7273C2.25 35.5838 9.98893 24.2683 23.175 15.8772C36.3343 7.50311 54.6511 2.25 75 2.25C95.3489 2.25 113.666 7.50311 126.825 15.8772C140.011 24.2683 147.75 35.5838 147.75 47.7273Z"
                  className="btn-stroke"
                  stroke-width="4.5"
                />
                <path
                  d="M31.7755 36.01V61H36.9205V44.27H36.9905L47.3855 61H52.8805V36.01H47.7355V52.775H47.6655L37.2355 36.01H31.7755ZM57.0179 36.01V61H75.9879V56.38H62.5129V50.255H74.6229V45.985H62.5129V40.63H75.7079V36.01H57.0179ZM85.1382 47.91L76.4232 61H82.5832L88.1482 52.355L93.6082 61H100.153L91.4382 47.945L99.4532 36.01H93.4332L88.3582 43.99L83.4582 36.01H77.0882L85.1382 47.91ZM107.188 40.63V61H112.683V40.63H120.173V36.01H99.698V40.63H107.188Z"
                  className="btn-fill"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <script src="js/app.js" type="module"></script>
    </main>
  );
}
