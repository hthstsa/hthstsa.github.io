import React from "react";
import Head from "next/head";
import Header from "../components/header";
import MainPage from "../components/main_page";
import OnePage from "../components/one_page";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
if (typeof window !== "undefined") {
  require("fullpage.js/vendors/scrolloverflow");
}
import ReactFullpage from "@fullpage/react-fullpage";
import BackgroundSplash from "../components/background_splash";
import PlacesToListen from "../components/places_to_listen";
import Tour from "../components/tour";
import Photos from "../components/photos";
import Music from "../components/music";
import WhatIsTSA from "../components/what_is_tsa";
import WhoAreWe from "../components/who_are_we";
import Activities from "../components/activities";
import Officers from "../components/officers";
import Competitions from "../components/competitions";
import Awards from "../components/awards";
import Footer from "../components/footer";

library.add(faBars);
library.add(faPlay);
library.add(faPause);

export const headerItems = [
  {
    title: "Design Brief",
    link: "/design-brief",
    id: 1,
    main: false
  },
  {
    title: "TSA",
    link: "/#main",
    id: 4,
    main: true
  },
  {
    title: "CTE",
    link: "/cte",
    id: 7,
    main: false
  }
];

class Index extends React.Component {
  state = {
    enabled: true
  };
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="UTF-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,800"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Header
          maxSize={1000}
          fullPageApi={val => this.setState({ enabled: val })}
          items={headerItems}
          selected={3}
        />
        <ReactFullpage
          navigation
          scrollOverflow
          bigSectionsDestination="top"
          normalScrollElements="#scroller"
          anchors={[
            "main",
            "tsa",
            "hths",
            "activities",
            "officers",
            "competitions",
            "awards",
            "footer"
          ]}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              fullpageApi.setAllowScrolling(this.state.enabled);
            }
            return (
              <ReactFullpage.Wrapper>
                <div style={{ position: "relative" }} className="section">
                  <BackgroundSplash
                    url={"https://hthstsa-af51.kxcdn.com/static/tsa-splash.jpg"}
                  >
                    HTHS TSA
                  </BackgroundSplash>
                </div>
                <div style={{ position: "relative" }} className="section">
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#800000"
                    }}
                  >
                    <WhatIsTSA />
                  </div>
                </div>
                <div style={{ position: "relative" }} className="section">
                  <WhoAreWe />
                </div>
                <div style={{ position: "relative" }} className="section">
                  <Activities />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="section fp-noscroll"
                >
                  <Officers />
                </div>
                <div style={{ position: "relative" }} className="section">
                  <Competitions />
                </div>
                <div style={{ position: "relative" }} className="section">
                  <Awards />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="section fp-auto-height"
                >
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <style jsx global>{`
          body {
            margin: 0px;
          }
          #fp-nav ul li a span,
          .fp-slidesNav ul li a span {
            background-color: #fff !important;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
