import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

// Images
import {
  HW_Anna,
  HW_Hui,
  HW_Jenn,
  HW_Poster,
  HW_Yilla,
  HW_Ying,
} from "../assets/images/allPhotos";

export default function HealthWellness(props) {
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
        <div data-router-view data-page="health">
          <main className="scene-wrapper">
            <div className=" nsc-page-title">
              <div className="anim-nsc">
                <div className="anim-container page-title-container page-container-spacing">
                  <div className="background-container">
                    <div className="bg-segment health"></div>
                    <div className="bg-segment health"></div>
                    <div className="bg-segment health"></div>
                  </div>
                  <div className="title-container">
                    <div id="nsc-anim-wipe" className="title-swipe-effect">
                      <h3 className="current-title nsc-title-small anim-title health-title">
                        Night Snack Club
                      </h3>
                    </div>
                    <h3 className="previous-title blog-title">
                      Night Snack Club
                    </h3>
                  </div>
                </div>
                <div className="page-title-container health-title">
                  <div className="page-title page-title-js">H</div>
                  <div className="page-title page-title-js">E</div>
                  <div className="page-title page-title-js">A</div>
                  <div className="page-title page-title-js">L</div>
                  <div className="page-title page-title-js">T</div>
                  <div className="page-title page-title-js">H</div>
                </div>
                <div className="page-title-container health-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
                  <div className="page-title page-title-js">A</div>
                  <div className="page-title page-title-js">N</div>
                  <div className="page-title page-title-js">D</div>
                </div>
                <div className="page-title-container health-title mobile-only">
                  <h2 className="page-title page-title-js">&nbsp;</h2>
                  <div className="page-title page-title-js">W</div>
                  <div className="page-title page-title-js">E</div>
                  <div className="page-title page-title-js">L</div>
                  <div className="page-title page-title-js">L</div>
                  <div className="page-title page-title-js">N</div>
                  <div className="page-title page-title-js">E</div>
                  <div className="page-title page-title-js">S</div>
                  <div className="page-title page-title-js">S</div>
                </div>
              </div>
            </div>
            <div className="images-well health">
              <div className="images-palette">
                <div className="targetClass poster hw-poster inactive-card">
                  <img src={HW_Poster} alt="Health and Wellness" />
                </div>
                <div className="targetClass hw-1 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/sculpt-your-way-to-glowy-skin-with-yilla2112222"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={HW_Yilla} alt="Facial Massage with Yilla" />
                  </a>
                  <div className="project-title">
                    Sculpt Your Way to <br />
                    Glowy Skin with Yilla
                  </div>
                </div>
                <div className="targetClass hw-2 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/yoga-journey-with-ying"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={HW_Ying} alt="Yoga with Ying" />
                  </a>
                  <div className="project-title">Yoga Journey with Ying</div>
                </div>
                <div className="targetClass hw-3 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/kombucha-dabbles"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={HW_Anna} alt="Kombucha Dabbles with Anna" />
                  </a>
                  <div className="project-title">Kombucha Dabbles</div>
                </div>
                <div className="targetClass hw-4 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/the-contemplative-art-of-suminagashi-with-jenn-chen"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={HW_Jenn} alt="Suminagashi with Jenn" />
                  </a>
                  <div className="project-title">
                    The Contemplative <br />
                    Art of Suminagashi with <br />
                    Jenn Chen
                  </div>
                </div>
                <div className="targetClass hw-5 inactive-card">
                  <a
                    href="https://www.nightsnackclub.com/blog/the-unqualified-herbalist-chamomile"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img src={HW_Hui} alt="Herbalism with Hui" />
                  </a>
                  <div className="project-title">
                    The Unqualified <br />
                    Herbalist: Chamomile
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="nav-row__btn back-btn health">
            <Link
              to={{
                pathname: "/blog",
                from: "health",
              }}
            >
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn health">
            <Link
              to={{
                pathname: "/nightsnack",
                from: "health",
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
