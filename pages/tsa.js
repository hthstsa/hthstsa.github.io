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

library.add(faBars);
library.add(faPlay);
library.add(faPause);

export const headerItems = [
  {
    title: "Design Brief",
    link: "/",
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
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,800"
            rel="stylesheet"
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
          anchors={["main", "tsa", "hths"]}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              fullpageApi.setAllowScrolling(this.state.enabled);
            }
            return (
              <ReactFullpage.Wrapper>
                <div style={{ position: "relative" }} className="section">
                  <BackgroundSplash url={"/static/tsa-splash.jpg"}>
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
                <Tour />
                <Photos />
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
