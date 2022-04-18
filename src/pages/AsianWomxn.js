import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";
import { loadpage } from "../js/helperFunc";

export default function AsianWomxn(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-index";
  }

  useEffect(() => {
    loadpage();
    appTransitions();
  });

  return (
    <main className={getBgColor()}>
      <Helmet>
        <meta name="theme-color" content="#fff1de" />
      </Helmet>
      <main className="scene-wrapper">
        <div className="nsc-page-title">
          <div className="anim-nsc">
            <div className="anim-container page-title-container page-container-spacing">
              <div className="background-container">
                <div className="bg-segment asian-womxn" />
                <div className="bg-segment asian-womxn" />
                <div className="bg-segment asian-womxn" />
              </div>
              <div className="title-container">
                <div id="nsc-anim-wipe" className="title-swipe-effect">
                  <Link to="/">
                    <h3 className="current-title nsc-title-small anim-title asian-title">
                      Night Snack Club
                    </h3>
                  </Link>
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
            </div>
            <div className="page-title-container asian-title mobile-only">
              <h2 className="page-title page-title-js">
                <span className="space">&nbsp;</span>
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
        <div className="images-well asian-womxn">
          <div className="images-palette">
            <div className="targetClass poster aw-poster inactive-card">
              <img
                src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/1_Poster_Asian_Womxn_r83mgp.png"
                alt="Asian Womxn"
              />
            </div>

            <div className="targetClass aw-1 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/cookie-do"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/7_Caitlin_jqpqb3.jpg"
                  alt="Cookie Do"
                />
              </a>
              <div className="project-title">COOKIE DO</div>
            </div>
            <div className="targetClass aw-2 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/the-contemplative-art-of-suminagashi-with-jenn-chen"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/6_Jenn_qbkot9.jpg"
                  alt="Jenn Chen"
                />
              </a>
              <div className="project-title">
                The Contemplative
                <br />
                Art of Suminagashi
                <br />
                with Jenn Chen
              </div>
            </div>
            <div className="targetClass aw-3 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/jeannie-huang"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950574/1_Asian_Womxn/5_Jeannie_rqn6ve.jpg"
                  alt="Jeannie Huang"
                />
              </a>
              <div className="project-title">
                The Ephemeral AND Intangible <br />
                Art of Wearable Florals with <br />
                Jeannie Huang
              </div>
            </div>
            <div className="targetClass aw-4 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/creative-couple-series-judy-and-oscar"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/4_Judy_hap9pv.png"
                  alt="Judy & Oscar"
                />
              </a>
              <div className="project-title">
                Creative Couple Series: <br />
                Judy & Oscar
              </div>
            </div>
            <div className="targetClass aw-5 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/sewing-circle-with-nicole-liao"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/3_Nicole_vq91dq.jpg"
                  alt="Nicole Liao"
                />
              </a>
              <div className="project-title">
                Sewing Circle <br />
                with Nicole Liao
              </div>
            </div>
            <div className="targetClass aw-6 inactive-card">
              <a
                className="delay"
                href="https://www.nightsnackclub.com/blog/smoothing-out-hard-corners-in-clay"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649950573/1_Asian_Womxn/2_Robyn_gzahyw.jpg"
                  alt="Corners in Clay"
                />
              </a>
              <div className="project-title">
                Smoothing Out Hard <br />
                Corners in Clay
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn back-btn asian-womxn">
        <Link
          to={{
            pathname: "/",
            from: "asian-womxn",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row__btn forward-btn asian-womxn">
        <Link
          to={{
            pathname: "/illustrators",
            from: "asian-womxn",
          }}
        >
          <NextButton />
        </Link>
      </div>
    </main>
  );
}
