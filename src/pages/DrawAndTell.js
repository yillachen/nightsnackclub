import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";

// Images
import {
  DT_Ale,
  DT_Caitlin,
  DT_Emily,
  DT_Enle,
  DT_Header,
  DT_Jocelyn,
  DT_Leah,
  DT_Liz,
  DT_Monica,
  DT_NicoleT,
  DT_Poster,
  DT_Tiffany,
} from "../assets/images/allPhotos";

export default function DrawAndTell(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-asian-womxn";
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
                <div className="bg-segment illustrators" />
                <div className="bg-segment illustrators" />
                <div className="bg-segment illustrators" />
              </div>
              <div className="title-container">
                <div id="nsc-anim-wipe" className="title-swipe-effect">
                  <Link to="/">
                    <h3 className="current-title nsc-title-small anim-title illustrators-title">
                      Night Snack Club
                    </h3>
                  </Link>
                </div>
                <h3 className="previous-title asian-title">Night Snack Club</h3>
              </div>
            </div>
            <div className="page-title-container illustrators-title">
              <span className="page-title page-title-js">D</span>
              <span className="page-title page-title-js">R</span>
              <span className="page-title page-title-js">A</span>
              <span className="page-title page-title-js">W</span>
            </div>
            <div className="page-title-container illustrators-title mobile-only">
              <h2 className="page-title page-title-js">&nbsp;</h2>
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
        <div className="images-well illustrators">
          <div className="images-palette">
            <div className="targetClass poster ii-poster inactive-card">
              <img src={DT_Poster} alt="Draw and Tell" />
            </div>
            <div className="targetClass ii-1 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/creative-couple-series-liz-and-enle"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Liz} alt="Liz and Enle" />
              </a>
              <div className="project-title">
                Creative Couple Series: <br />
                Liz & Enle
              </div>
            </div>
            <div className="targetClass ii-2 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/cookie-do"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Caitlin} alt="Caitlin" />
              </a>
              <div className="project-title">COOKIE DO</div>
            </div>
            <div className="targetClass ii-3 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/meet-alejandro-chen-li"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Ale} alt="Alejandro Chen Li" />
              </a>
              <div className="project-title">
                Meet Alejandro <br />
                Chen Li
              </div>
            </div>
            <div className="targetClass ii-4 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/tattooing-as-a-form-of-ritual"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Monica} alt="Eunji" />
              </a>
              <div className="project-title">
                Tattooing As a Form of <br />
                Ritual with Eunji
              </div>
            </div>
            <div className="targetClass ii-5 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/abc-for-abcs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Tiffany} alt="Tiffany" />
              </a>
              <div className="project-title">Abc for Abcs</div>
            </div>
            <div className="targetClass ii-6 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/the-meandering-path-of-emily"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Emily} alt="Emily" />
              </a>
              <div className="project-title">
                The meandering <br />
                path of emily
              </div>
            </div>
            <div className="targetClass ii-7 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/leah-maldonado-invites-you-to-her-digital-playground"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Leah} alt="Leah Maldonado" />
              </a>
              <div className="project-title">
                Leah Maldonado Invites You to <br />
                Her Digital Playground
              </div>
            </div>
            <div className="targetClass ii-8 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/creative-couple-series-liz-and-enle"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Enle} alt="Liz and Enle 2" />
              </a>
              <div className="project-title">
                Creative Couple Series: <br />
                Liz & Enle
              </div>
            </div>
            <div className="targetClass ii-9 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/behind-the-murals"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Jocelyn} alt="Jocelyn" />
              </a>
              <div className="project-title">Behind the Murals</div>
            </div>
            <div className="targetClass ii-10 inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/drawing-a-sacai-with-nicolet"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_NicoleT} alt="Nicolet" />
              </a>
              <div className="project-title">
                Drawing a Sacai <br />
                with Nicolet
              </div>
            </div>
            <div className="targetClass ii-11 drop-shadow inactive-card">
              <a
                href="https://www.nightsnackclub.com/blog/from-nyc-to-nola"
                target="_blank"
                rel="noreferrer"
              >
                <img src={DT_Header} alt="From NYC to NOLA" />
              </a>
              <div className="project-title">From NYC to NOLA</div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn back-btn illustrators">
        <Link
          to={{
            pathname: "/asian-womxn",
            from: "illustrators",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row__btn forward-btn illustrators">
        <Link
          to={{
            pathname: "/spiritual",
            from: "illustrators",
          }}
        >
          <NextButton />
        </Link>
      </div>
    </main>
  );
}
