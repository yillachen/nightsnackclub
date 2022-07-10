import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";
import { loadpage } from "../js/helperFunc";
import useAnalyticsEventTracker from '../js/useAnalyticsEventTracker'
import getBgColor from '../js/getBgColor'


const HealthWellness = ({location}) => {
  useEffect(() => {
    appTransitions();
    loadpage();
  }, []);

  const gaEventTracker = useAnalyticsEventTracker('Health & Wellness');

  return (
    <main className={getBgColor(location.from)}>
      <Helmet>
        <meta name="theme-color" content="#fee3ba" />
      </Helmet>
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
                  <Link to="/">
                    <h3 className="current-title nsc-title-small anim-title health-title">
                      Night Snack Club
                    </h3>
                  </Link>
                </div>
                <h3 className="previous-title blog-title">Night Snack Club</h3>
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
              <h2 className="page-title page-title-js">
                <span className="space">&nbsp;</span>
              </h2>
              <div className="page-title page-title-js">A</div>
              <div className="page-title page-title-js">N</div>
              <div className="page-title page-title-js">D</div>
            </div>
            <div className="page-title-container health-title mobile-only">
              <h2 className="page-title page-title-js">
                <span className="space"></span>
              </h2>
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
              <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/5_Health_and_Wellness/29_Poster_Health_and_Wellness_m6g4lf.png" alt="Health and Wellness" />
            </div>
            <div className="targetClass hw-1 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/sculpt-your-way-to-glowy-skin-with-yilla"
                rel="noreferrer" target="_blank"
                onClick={() => gaEventTracker('Sculpt Your Way to Glowy Skin with Yilla')}
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/5_Health_and_Wellness/30_Yilla_kaqgc9.png" alt="Facial Massage with Yilla" />
              </a>
              <div className="project-title">
                Sculpt Your Way to <br />
                Glowy Skin with Yilla
              </div>
            </div>
            <div className="targetClass hw-2 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/yoga-journey-with-ying"
                rel="noreferrer" target="_blank"
                onClick={() => gaEventTracker('Yoga Journey with Ying')}
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/5_Health_and_Wellness/31_Ying_jgsnkl.jpg" alt="Yoga with Ying" />
              </a>
              <div className="project-title">Yoga Journey with Ying</div>
            </div>
            <div className="targetClass hw-3 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/kombucha-dabbles"
                rel="noreferrer" target="_blank"
                onClick={() => gaEventTracker('Kombucha Dabbles with Anna')}
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313342/5_Health_and_Wellness/32_Anna_inesed.jpg" alt="Kombucha Dabbles with Anna" />
              </a>
              <div className="project-title">Kombucha Dabbles</div>
            </div>
            <div className="targetClass hw-4 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/the-contemplative-art-of-suminagashi-with-jenn-chen"
                rel="noreferrer" target="_blank"
                onClick={() => gaEventTracker('Suminagashi with Jenn')}
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313341/5_Health_and_Wellness/33_Jenn_sfyotc.jpg" alt="Suminagashi with Jenn" />
              </a>
              <div className="project-title">
                The Contemplative <br />
                Art of Suminagashi with <br />
                Jenn Chen
              </div>
            </div>
            <div className="targetClass hw-5 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/the-unqualified-herbalist-chamomile"
                rel="noreferrer" target="_blank"
                onClick={() => gaEventTracker('Unqualified Herbalist: Chamomile')}
              >
                <img src="https://res.cloudinary.com/y-chen/image/upload/v1650313341/5_Health_and_Wellness/34_Hui_sudefj.jpg" alt="Herbalism with Hui" />
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
    </main>
  );
}

export default HealthWellness;
