import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

// Images
import {
  BW_Duy,
  BW_Johana,
  BW_Leah,
  BW_Nicole,
  BW_Nicolet,
  BW_Poster,
} from "../assets/images/allPhotos";

export default function BlogWorms(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-spiritual";
  }

  useEffect(() => {
    appTransitions();
  });

  return (
    <main className={getBgColor()}>
      <main className="scene-wrapper">
        <div className="nsc-page-title">
          <div className="anim-nsc">
            <div className="anim-container page-title-container page-container-spacing">
              <div className="background-container">
                <div className="bg-segment blog"></div>
                <div className="bg-segment blog"></div>
                <div className="bg-segment blog"></div>
              </div>
              <div className="title-container">
                <div id="nsc-anim-wipe" className="title-swipe-effect">
                  <Link to="/">
                    <h3 className="current-title nsc-title-small anim-title blog-title">
                      Night Snack Club
                    </h3>
                  </Link>
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
              <h2 className="page-title page-title-js">
                <span className="space">&nbsp;</span>
              </h2>
              <div className="page-title page-title-js">W</div>
              <div className="page-title page-title-js">O</div>
              <div className="page-title page-title-js">R</div>
              <div className="page-title page-title-js">M</div>
              <div className="page-title page-title-js">S</div>
            </div>
          </div>
        </div>
        <div className="images-well blog">
          <div className="images-palette">
            <div className="targetClass poster bw-poster inactive-card">
              <img src={BW_Poster} alt="Blog Worms" />
            </div>
            <div className="targetClass bw-1 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/drawing-a-sacai-with-nicolet"
                target="_blank"
                rel="noreferrer"
              >
                <img src={BW_Nicolet} alt="Sacai with Nicolet" />
              </a>
              <div className="project-title">
                Drawing a Sacai <br />
                with Nicolet
              </div>
            </div>
            <div className="targetClass bw-2 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/leah-maldonado-invites-you-to-her-digital-playground"
                target="_blank"
                rel="noreferrer"
              >
                <img src={BW_Leah} alt="Leah Maldonado" />
              </a>
              <div className="project-title">
                Leah Maldonado Invites You to <br />
                Her Digital Playground
              </div>
            </div>
            <div className="targetClass bw-3 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/sourdough-diaries-brownies"
                target="_blank"
                rel="noreferrer"
              >
                <img src={BW_Johana} alt="Sourdough Diaries: Brownies" />
              </a>
              <div className="project-title">
                Sourdough Diaries: <br />
                Brownies
              </div>
            </div>
            <div className="targetClass bw-4 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/sewing-circle-with-nicole-liao"
                target="_blank"
                rel="noreferrer"
              >
                <img src={BW_Nicole} alt="Sewing Circle with Nicole Liao" />
              </a>
              <div className="project-title">
                Sewing Circle with <br />
                Nicole Liao
              </div>
            </div>
            <div className="targetClass bw-5 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/a-collector-duys-comme-des-garcons-collection  "
                target="_blank"
                rel="noreferrer"
              >
                <img src={BW_Duy} alt="Duy's Comme des Garcons Collection" />
              </a>
              <div className="project-title">
                A Collector: Duy’s Comme <br />
                des Garçons Collection
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn back-btn blog">
        <Link
          to={{
            pathname: "/spiritual",
            from: "blog",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row__btn forward-btn blog">
        <Link
          to={{
            pathname: "/health",
            from: "blog",
          }}
        >
          <NextButton />
        </Link>
      </div>

      <script src="js/app.js" type="module"></script>
    </main>
  );
}
