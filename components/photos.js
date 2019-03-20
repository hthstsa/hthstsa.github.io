import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 275px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const Video = styled.video`
  object-fit: fill;
  transition: opacity 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const VideoContainer = styled.div`
  position: relative;
  max-width: 100%;
  display: block;
  height: 100% !important;
  width: 100% !important;
`;

export default class Photos extends Component {
  render() {
    return (
      <Container className="section fp-noscroll">
        <Grid>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <VideoContainer>
            <Video className="players" autoPlay muted loop preload>
              <source src="/static/island.mp4" />
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video className="players" autoPlay muted loop preload>
              <source src="/static/volume.mp4" />
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video className="players" autoPlay muted loop preload>
              <source src="/static/guitarist.mp4" />
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video className="players" autoPlay muted loop preload>
              <source src="/static/record.mp4" />
            </Video>
          </VideoContainer>
          <VideoContainer>
            <Video className="players" autoPlay muted loop preload>
              <source src="/static/lights.mp4" />
            </Video>
          </VideoContainer>
        </Grid>
      </Container>
    );
  }
}
