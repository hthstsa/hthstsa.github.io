import React, { Component } from "react";
import styled from "styled-components";

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
