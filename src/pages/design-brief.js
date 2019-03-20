import React from "react";
import ReactDOM from "react-dom";
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
import Background from "../components/background";
import PlacesToListen from "../components/places_to_listen";
import Tour from "../components/tour";
import Photos from "../components/photos";
import Music from "../components/music";

library.add(faBars);
library.add(faPlay);
library.add(faPause);

export const headerItems = [
  {
    title: "TSA",
    link: "/index.html",
    id: 1,
    main: false
  },
  {
    title: "Tour",
    link: "/design-brief.html#tour",
    id: 2,
    main: false
  },
  {
    title: "Media",
    link: "/design-brief.html#media",
    id: 3,
    main: false
  },
  {
    title: "Captcha!",
    link: "/design-brief.html#main",
    id: 4,
    main: true
  },
  {
    title: "Shop",
    link: "/shop.html",
    id: 5,
    main: false
  },
  {
    title: "Music",
    link: "/design-brief.html#music",
    id: 6,
    main: false
  },
  {
    title: "CTE",
    link: "/cte.html",
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
        <Header
          maxSize={1000}
          fullPageApi={val => this.setState({ enabled: val })}
          items={headerItems}
          selected={3}
        />
        <Music />
        <ReactFullpage
          navigation
          scrollOverflow
          bigSectionsDestination="top"
          normalScrollElements="#mobile-menu"
          anchors={["main", "tour", "media"]}
          afterLoad={(anchor, index) => {
            document.getElementById("player").play();
            if (document.getElementsByClassName("players")) {
              var x = document.getElementsByClassName("players");
              for (let i = 0; i < x.length; i++) {
                x[i].play();
              }
            }
          }}
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

ReactDOM.render(React.createElement(Index), document.getElementById("root"));
