import React from "react";
import Head from "next/head";
import Header from "../components/header";
import MainPage from "../components/main_page";
import OnePage from "../components/one_page";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
if (typeof window !== "undefined") {
  require("fullpage.js/vendors/scrolloverflow");
}
import ReactFullpage from "@fullpage/react-fullpage";
import Background from "../components/background";
import PlacesToListen from "../components/places_to_listen";
import Tour from "../components/tour";

library.add(faBars);

export const headerItems = [
  {
    title: "Tour",
    link: "/#tour",
    id: 1,
    main: false
  },
  {
    title: "Captcha!",
    link: "/#main",
    id: 2,
    main: true
  },
  {
    title: "Shop",
    link: "/shop",
    id: 3,
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
          anchors={["main", "tour"]}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              fullpageApi.setAllowScrolling(this.state.enabled);
            }
            return (
              <ReactFullpage.Wrapper>
                <div style={{ position: "relative" }} className="section">
                  <Background />
                  <PlacesToListen />
                </div>
                <Tour />
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
