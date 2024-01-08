import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Home.css";
import web from "../assets/logo.png";
import web1 from "../assets/invite-1.jpg";
import web2 from "../assets/invite-2.png";
import web3 from "../assets/event-1.jpg";

import { useEffect } from "react";
// import Swiper from 'swiper';

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="Container-fluid-nav-bg">
          <div className="row">
            <div className="col-10 max-auto">
              {/* <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"> </div> */}

              <div className="home__container container grid">
                <div className="home__data">
                  <h1 className="home__title">
                    INNOVAIT-ON <br />
                  </h1>
                  <h3 className="home__subtitle">Ideate-Innovate-Ignite</h3>

                  <p className="home__description">
                    Our project-based club is a dynamic community of passionate
                    individuals dedicated to bringing ideas to life. Dive into
                    collaborative projects spanning diverse fields, from
                    cutting-edge technology to sustainable design. Join us in
                    transforming inspiration into tangible results and embark on
                    a journey of innovation, learning, and shared success!!
                  </p>

                  <NavLink to="/" className="button">
                    Explore now
                  </NavLink>
                </div>

                <div className="home__images">
                  <div className="home__swiper swiper">
                    <div className="swiper-wrapper">
                      <article className="home__article swiper-slide ">
                        <img src={web} alt="logo_img" className="home__img" />
                      </article>

                      <article className="home__article swiper-slide ">
                        <img
                          src={web2}
                          alt="invitation"
                          className="home__img"
                        />
                      </article>
                      <article className="home__article swiper-slide  ">
                        <img src={web1} alt="invite1" className="home__img" />
                      </article>
                      <article className="home__article swiper-slide  ">
                        <img src={web3} alt="event" className="home__img" />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
