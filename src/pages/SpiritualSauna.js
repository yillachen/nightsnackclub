import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

// Images
import {
  SS_August,
  SS_July,
  SS_Poster,
  SS_Sept,
} from "../assets/images/allPhotos";

export default function SpiritualSauna(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-illustrators";
  }

  useEffect(() => {
    appTransitions();
  });

  return (
    <main className={getBgColor()}>
      <div className="scene-wrapper">
        <div className="nsc-page-title">
          <div className="anim-nsc">
            <div className="anim-container page-title-container page-container-spacing">
              <div className="background-container">
                <div className="bg-segment spiritual"></div>
                <div className="bg-segment spiritual"></div>
                <div className="bg-segment spiritual"></div>
              </div>
              <div className="title-container">
                <div id="nsc-anim-wipe" className="title-swipe-effect">
                  <Link to="/">
                    {" "}
                    <h3 className="current-title nsc-title-small anim-title spiritual-title">
                      Night Snack Club
                    </h3>
                  </Link>
                </div>
                <h3 className="previous-title illustrators-title">
                  Night Snack Club
                </h3>
              </div>
            </div>
            <div className="page-title-container spiritual-title">
              <div className="page-title page-title-js">S</div>
              <div className="page-title page-title-js">P</div>
              <div className="page-title page-title-js">I</div>
              <div className="page-title page-title-js">R</div>
              <div className="page-title page-title-js">I</div>
              <div className="page-title page-title-js">T</div>
              <div className="page-title page-title-js">U</div>
              <div className="page-title page-title-js">A</div>
              <div className="page-title page-title-js">L</div>
            </div>
            <div className="page-title-container spiritual-title ss-mobile-only">
              <h2 className="page-title page-title-js">&nbsp;</h2>
              <div className="page-title page-title-js">S</div>
              <div className="page-title page-title-js">A</div>
              <div className="page-title page-title-js">U</div>
              <div className="page-title page-title-js">N</div>
              <div className="page-title page-title-js">A</div>
            </div>
          </div>
        </div>
        <div className="images-well spiritual">
          <div className="images-palette">
            <div className="targetClass poster ss-poster inactive-card">
              <img src={SS_Poster} alt="Spiritual Sauna" />
            </div>
            <div className="targetClass ss-1 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/tarot-spread-guide-for-august-2020"
                target="_blank"
                rel="noreferrer"
              >
                <img src={SS_August} alt="Tarot Spread Guide for August 2020" />
              </a>
              <div className="project-title">
                Tarot Spread Guide <br />
                for August 2020
              </div>
            </div>
            <div className="targetClass ss-2 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/tarot-spread-guide-for-july-2020"
                target="_blank"
                rel="noreferrer"
              >
                <img src={SS_July} alt="Tarot Spread Guide for July 2020" />
              </a>
              <div className="project-title">
                Tarot Spread Guide <br />
                for July 2020
              </div>
            </div>
            <div className="targetClass ss-3 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/tarot-spread-guide-for-september-2020"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SS_Sept}
                  alt="Tarot Spread Guide for September 2020"
                />
              </a>
              <div className="project-title">
                Tarot Spread Guide <br />
                for September 2020
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-row__btn back-btn spiritual">
        <Link
          to={{
            pathname: "/illustrators",
            from: "spiritual",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row__btn forward-btn spiritual">
        <Link
          to={{
            pathname: "/blog",
            from: "spiritual",
          }}
        >
          <NextButton />
        </Link>
      </div>
    </main>
  );
}
