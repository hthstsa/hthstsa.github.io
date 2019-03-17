import React, { Component } from "react";
import styled from "styled-components";

const VideoBackground = styled.video`
  /* Make video to at least 100% wide and tall */

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: 100%;
  height: 100%;

  /* Center the video */
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
`;

export default class Background extends Component {
  render() {
    return (
      <VideoBackground autoPlay muted loop>
        <source src="/static/background.mp4" type="video/mp4" />
      </VideoBackground>
    );
  }
}
