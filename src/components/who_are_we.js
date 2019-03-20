import React, { Component } from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 6vmax;
  color: #fff;
  background-color: #000;

  @media screen and (min-width: 1300px) {
    font-size: 78px;
  }

  &:before {
    content: "";
    background-image: url("https://hthstsa-af51.kxcdn.com/static/hths-tsa.jpg_large");
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 700px) {
    padding-top: 60px;
  }
`;

const Container = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  height: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 1;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    height: 65%;
    width: 75%;
  }
`;

const Description = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  background-color: #fafafa;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;
const Facts = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  background-color: #697896;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

const HTHSLogo = styled.img`
  width: auto;
  max-height: 60%;
  margin-top: 8.5%;
  display: block;
  margin: auto;
  margin-top: 6.5%;
`;

const HTHSDesc = styled.p`
  font-family: "Raleway";
  font-size: 2vmax;
  padding-left: 10%;
  padding-right: 10%;
  color: #000;
  font-weight: 400;
  @media screen and (min-width: 1300px) {
    font-size: 26px;
  }
`;

const FactsTitle = styled.h1`
  font-family: "Raleway";
  font-size: 4vmax;
  color: #fff;
  margin-left: 5%;
  @media screen and (min-width: 1300px) {
    font-size: 52px;
  }
`;

const FactsInfo = styled.div`
  font-family: "Raleway";
  font-size: 3vmax;
  font-weight: 400;
  color: #fff;
  margin-left: 10%;
  line-height: 200%;
  @media screen and (min-width: 1300px) {
    font-size: 39px;
  }
`;

export default class WhoAreWe extends Component {
  render() {
    return (
      <TotalContainer>
        Who Are We?
        <Container>
          <Description>
            <HTHSLogo src="https://hthstsa-af51.kxcdn.com/static/hths.jpg" />
            <HTHSDesc>This is a test</HTHSDesc>
          </Description>
          <Facts>
            <FactsTitle>Facts</FactsTitle>
            <FactsInfo>
              Stuff
              <br />
              More Stuff
            </FactsInfo>
          </Facts>
        </Container>
      </TotalContainer>
    );
  }
}
