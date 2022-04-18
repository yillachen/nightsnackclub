import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

export default function NightSnacks(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-health";
  }

  useEffect(() => {
    appTransitions();
  });

  return (
    <main className={getBgColor()}>
      <Helmet>
        <meta name="theme-color" content="#c6d2cf" />
      </Helmet>
      <main className="scene-wrapper">
        <div className="nsc-page-title">
          <div className="anim-nsc">
            <div className="anim-container page-title-container page-container-spacing">
              <div className="background-container">
                <div className="bg-segment nightsnack-club"></div>
                <div className="bg-segment nightsnack-club"></div>
                <div className="bg-segment nightsnack-club"></div>
              </div>
              <div className="title-container">
                <div id="nsc-anim-wipe" className="title-swipe-effect">
                  <Link to="/">
                    <h3 className="current-title nsc-title-small anim-title nightsnack-title">
                      Night Snack Club
                    </h3>
                  </Link>
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
              <h2 className="page-title page-title-js">
                <span className="space">&nbsp;</span>
              </h2>
              <div className="page-title page-title-js">A</div>
              <div className="page-title page-title-js">T</div>
              <div className="page-title page-title-js">T</div>
              <div className="page-title page-title-js">A</div>
              <div className="page-title page-title-js">C</div>
              <div className="page-title page-title-js">K</div>
            </div>
          </div>
        </div>
        <div className="images-well nightsnack">
          <div className="images-palette">
            <div className="targetClass poster ns-poster inactive-card">
              <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/6_Night_Snacks/35_Poster_Night_Snacks_ssrvzz.png" alt="Night Snacks" />
            </div>
            <div className="targetClass ns-1 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/pansy-orange-gin-cordial"
                rel="noreferrer" target="_blank"
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/6_Night_Snacks/36_Shirley_mmxng8.jpg" alt="Pansy Orange Fin Cordial" />
              </a>
              <div className="project-title">Pansy Orange Gin Cordial</div>
            </div>
            <div className="targetClass ns-2 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/egg-tarts"
                rel="noreferrer" target="_blank"
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/6_Night_Snacks/37_Jenn_hcxmxl.jpg" alt="Hong Kong meets Philly Egg Tarts" />
              </a>
              <div className="project-title">
                My Mom’s HK Style Egg Tarts <br />
                with A Touch of Philly
              </div>
            </div>
            <div className="targetClass ns-3 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/finding-inspiration-dessert-edition"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/6_Night_Snacks/38_Johana_yzivif.jpg"
                  alt="Finding Inspiration, Dessert Edition"
                />
              </a>
              <div className="project-title">
                Finding Inspiration, <br />
                Dessert Edition
              </div>
            </div>
            <div className="targetClass ns-4 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/anh-anhs-salted-eggs"
                rel="noreferrer" target="_blank"
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/6_Night_Snacks/39_Shirley_v3icdv.jpg" alt="Anh Anh's   Salted Eggs" />
              </a>
              <div className="project-title">Anh Anh’s Salted Eggs</div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn back-btn snack-attack">
        <Link
          to={{
            pathname: "/health",
            from: "nightsnack",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row__btn forward-btn snack-attack">
        <Link
          to={{
            pathname: "/thank-you",
            from: "index",
          }}
        >
          <NextButton />
        </Link>
      </div>
    </main>
  );
}
