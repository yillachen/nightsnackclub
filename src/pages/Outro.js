import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import RestartButton from "../components/RestartButton";
import MailchimpForm from "../components/Mailchimp";
import { outroTransitions } from "../js/transitions";

export default function Outro(props) {
  function getBgColor() {
    let bgColor = props.location.from;
    return bgColor ? `body-${bgColor}` : "body-nightsnack";
  }

  useEffect(() => {
    outroTransitions();
  });

  return (
    <main className={getBgColor()}>
      <Helmet>
        <meta name="theme-color" content="#dddcff" />
      </Helmet>
      <main className="scene-wrapper outro">
        <div className="background-container">
          <div className="bg-segment thanks" />
          <div className="bg-segment thanks" />
          <div className="bg-segment thanks" />
        </div>
        <div className="top-gradient"></div>
        <div className=" nsc-page-title">
          <div className="anim-nsc">
            <div className="anim-nsc">
              <div className="anim-container">
                <Link to="/">
                  <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                    Night
                  </div>
                  <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                    Snack
                  </div>
                  <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                    Club
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="scene-container">
          <div className=" year-in-review">
            <div className="anim-yir">
              <div className="anim-container thanks-cont">
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-desk">
                    THANK YOU FOR
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-desk">
                    YOUR SUPPORT
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-desk">
                    AND LET&#8217;S KEEP
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-desk">
                    IN TOUCH
                  </h3>
                </div>

                {/* MOBILE TEXT FORMAT */}
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    THANK YOU
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    FOR YOUR
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    SUPPORT
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    AND LET&#8217;S
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    KEEP IN
                  </h3>
                </div>
                <div className="page-title-container">
                  <h3 className="thanks-title thanks-content page-title-js content-mobile">
                    TOUCH
                  </h3>
                </div>
              </div>
            </div>

            <div className="mail-signup">
              <MailchimpForm />

              <div className="social-bar">
                <ul className="social-links">
                  <li>
                    <a
                      href="https://nightsnackclub.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WEBSITE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/nightsnackclub"
                      target="_blank"
                      rel="noreferrer"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="nav-row__btn back-btn asian-womxn">
        <Link
          to={{
            pathname: "/nightsnack",
            from: "thanks",
          }}
        >
          <BackButton />
        </Link>
      </div>

      <div className="nav-row begin-again-btn">
        <Link
          to={{
            pathname: "/",
            from: "thanks",
          }}
          className="begin-again"
        >
          <RestartButton />
        </Link>
      </div>
    </main>
  );
}
