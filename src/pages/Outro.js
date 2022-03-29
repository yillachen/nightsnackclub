import "../styles/styles.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import RestartButton from "../components/RestartButton";
import { outroTransitions } from "../js/transitions";

// Images

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
      <main className="scene-wrapper intro">
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
              <div id="mc_embed_signup">
                <form
                  action="https://nightsnackclub.us20.list-manage.com/subscribe/post?u=5490e1d0a99db7f49bde09b5e&amp;id=f055921875"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="form-subscribe mc-field-group">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        placeholder="EMAIL ADDRESS"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button__submit"
                      />
                    </div>

                    <div id="mce-responses" className="clear foot">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>

                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_ad09e19e83571392805e04cf6_c135f5f7e4"
                        tabIndex="-1"
                        value=""
                      />
                    </div>
                  </div>
                </form>
              </div>

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
