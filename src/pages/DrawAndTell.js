import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";
import { appTransitions } from "../js/transitions";
import { loadpage } from "../js/helperFunc";

const DrawAndTell = ({location}) => {
  function getBgColor() {
    let bgColor = location.from;
    return bgColor ? `body-${bgColor}` : "body-asian-womxn";
  }

  useEffect(() => {
    appTransitions();
    loadpage();
  }, []);

  return (
    <main className={getBgColor()}>
      <Helmet>
        <meta name="theme-color" content="#0a1772" />
      </Helmet>
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
              <h2 className="page-title page-title-js">
                <span className="space">&nbsp;</span>
              </h2>
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
              <img
                src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/8_Poster_Illustrators_izcafc.png"
                alt="Draw and Tell"
              />
            </div>
            <div className="targetClass ii-1 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/creative-couple-series-liz-and-enle"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/10_Liz_hmpgad.jpg"
                  alt="Liz and Enle"
                />
              </a>
              <div className="project-title">
                Creative Couple Series: <br />
                Liz & Enle
              </div>
            </div>
            <div className="targetClass ii-2 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/cookie-do"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/17_Caitlin_v6uwf7.png"
                  alt="Caitlin"
                />
              </a>
              <div className="project-title">COOKIE DO</div>
            </div>

            <div className="targetClass ii-3 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/meet-alejandro-chen-li"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/12_Ale_b7io9j.jpg"
                  alt="Alejandro Chen Li"
                />
              </a>
              <div className="project-title">
                Meet Alejandro <br />
                Chen Li
              </div>
            </div>

            <div className="targetClass ii-4 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/tattooing-as-a-form-of-ritual"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/13_Monica_pyzrpy.jpg"
                  alt="Eunji"
                />
              </a>
              <div className="project-title">
                Tattooing As a Form of <br />
                Ritual with Eunji
              </div>
            </div>
            <div className="targetClass ii-5 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/abc-for-abcs"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/14_Tiffany_lblj02.png"
                  alt="Tiffany"
                />
              </a>
              <div className="project-title">Abc for Abcs</div>
            </div>
            <div className="targetClass ii-6 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/the-meandering-path-of-emily"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/15_Emily_yxkc6o.jpg"
                  alt="Emily"
                />
              </a>
              <div className="project-title">
                The meandering <br />
                path of emily
              </div>
            </div>
            <div className="targetClass ii-7 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/leah-maldonado-invites-you-to-her-digital-playground"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/16_Leah_inb4sk.png"
                  alt="Leah Maldonado"
                />
              </a>
              <div className="project-title">
                Leah Maldonado Invites You to <br />
                Her Digital Playground
              </div>
            </div>
            <div className="targetClass ii-8 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/creative-couple-series-liz-and-enle"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/11_Enle_tkvmma.jpg"
                  alt="Liz and Enle 2"
                />
              </a>
              <div className="project-title">
                Creative Couple Series: <br />
                Liz & Enle
              </div>
            </div>
            <div className="targetClass ii-9 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/behind-the-murals"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951378/2_Draw_And_Tell/18_Jocelyn_ow53xy.jpg"
                  alt="Jocelyn"
                />
              </a>
              <div className="project-title">Behind the Murals</div>
            </div>
            <div className="targetClass ii-10 inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/drawing-a-sacai-with-nicolet"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/9_Nicolet_iaxeyv.jpg"
                  alt="Nicolet"
                />
              </a>
              <div className="project-title">
                Drawing a Sacai <br />
                with Nicolet
              </div>
            </div>
            <div className="targetClass ii-11 drop-shadow inactive-card">
              <a
                className="delay" href="https://www.nightsnackclub.com/blog/from-nyc-to-nola"
                rel="noreferrer" target="_blank"
              >
                <img
                  src="https://res.cloudinary.com/y-chen/image/upload/v1649951379/2_Draw_And_Tell/header-image_pccrhu.png"
                  alt="From NYC to NOLA"
                />
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

export default DrawAndTell;
