import "../styles/styles.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import RestartButton from "../components/RestartButton";

// Images

export default function Outro(props) {
  useEffect(() => {
    function removeClass(targetClass) {
      const imageGroup = document.querySelectorAll(".images-well .targetClass");

      imageGroup.forEach((el) => {
        el.classList.remove(targetClass);
      });
    }

    // const title = document.querySelector(".current-title.nsc-title-small");
    // title.addEventListener("click", (e) => {
    //   window.location.assign("/");
    // });

    function getBgColor() {
      const bgColor = "#0b1676";
      document.body.class = "";
      document.body.classList.add("body-" + bgColor);
    }

    function projectTooltip() {
      var tooltip = document.querySelectorAll(".project-title");
      document.addEventListener("mousemove", fn, false);

      function fn(e) {
        for (var i = tooltip.length; i--; ) {
          let offset_x = e.offsetX;
          let offset_y = e.offsetY + 45;
          tooltip[i].style.left = offset_x + "px";
          tooltip[i].style.top = offset_y + "px";
        }
      }
    }

    const tl = gsap.timeline({
      onComplete: () => {
        getBgColor();
        removeClass("inactive-card");
        // followTheMouse();
        projectTooltip();
        // done();
      },
    });

    tl
      // GENERAL TITLE->IN
      .from(
        ".page-title-js",
        {
          duration: 1,
          ease: "power4",
          yPercent: -120,
          stagger: 0.075,
          delay: 0.3,
        },
        0.0
      )

      // BG SEGMENTS
      .fromTo(
        ".bg-segment",
        {
          width: "0%",
        },
        {
          duration: 2.5,
          width: "100%",
          ease: "power4",
          stagger: 0.25,
        },
        0.0
      );
  });

  return (
    <main className="body-index">
      <div data-router-wrapper>
        <div data-router-view data-page="index">
          <div className="top-gradient"></div>
          <main className="scene-wrapper">
            <div className=" nsc-page-title">
              <div className="anim-nsc">
                <div className="outro-container-spacing">
                  <div className="anim-nsc">
                    <div className="anim-container">
                      <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                        Night
                      </div>
                      <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                        Snack
                      </div>
                      <div className="anim-title nsc-title-kerning page-title-js nsc-title-medium">
                        Club
                      </div>
                    </div>
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
                        AND LET'S KEEP
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
                        AND LET'S
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
                </div>

                <ul className="social-links">
                  <li><a href="https://nightsnackclub.com" target="_blank" rel="noreferrer">WEBSITE</a></li>
                  <li><a href="https://instagram.com/nightsnackclub" target="_blank" rel="noreferrer">INSTAGRAM</a></li>
                </ul>
              </div>
            </div>
            <div className="background-container">
              <div className="bg-segment index" />
              <div className="bg-segment index" />
              <div className="bg-segment index" />
            </div>
          </main>

          <div className="nav-row__btn back-btn asian-womxn">
            <Link to="/nightsnack">
              <BackButton />
            </Link>
          </div>

          <div className="nav-row__btn forward-btn lg-forward-btn">
            <Link to="/" className="begin-again">
              <RestartButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
