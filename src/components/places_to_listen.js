import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 20px;
  color: #b3b3b3;
  letter-spacing: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: calc(50% - 500px / 2);
  font-family: "Raleway";
  font-size: 13px;
  overflow: hidden;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    height: 150px;
    width: 150px;
    left: calc(50% - 150px / 2);
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #b3b3b3;
`;

export default class PlacesToListen extends Component {
  render() {
    return (
      <Container>
        <SocialLink href="#spotify">SPOTIFY</SocialLink>
        <SocialLink href="#itunes">iTUNES</SocialLink>
        <SocialLink href="#amazon">AMAZON</SocialLink>
        <SocialLink href="#soundcloud">SOUNDCLOUD</SocialLink>
        <SocialLink href="#youtube">YOUTUBE</SocialLink>
      </Container>
    );
  }
}
