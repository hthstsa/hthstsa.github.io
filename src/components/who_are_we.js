import React, { Component } from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  overflow-y: auto;
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
  overflow-y: auto;
`;

const HTHSLogo = styled.img`
  width: auto;
  max-height: 30%;
  margin-top: 8.5%;
  display: block;
  margin: auto;
  margin-top: 6.5%;
`;

const HTHSDesc = styled.p`
  font-family: "Raleway";
  font-size: 1.3vmax;
  padding-left: 10%;
  padding-right: 10%;
  color: #000;
  font-weight: 400;
  @media screen and (min-width: 1300px) {
    font-size: 17px;
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
  font-size: 2vmax;
  font-weight: 400;
  color: #fff;
  margin-left: 10%;
  line-height: 150%;
  @media screen and (min-width: 1300px) {
    font-size: 26px;
  }
`;

export default class WhoAreWe extends Component {
  render() {
    return (
      <TotalContainer>
        Who Are We?
        <Container>
          <Description className="no-scroll">
            <HTHSLogo src="https://hthstsa-af51.kxcdn.com/static/hths.jpg" />
            <HTHSDesc>
              High Technology High School is one of New Jersey’s premier TSA
              chapters, placing at least one team in the top 3 for 54% of the NJ
              State Conference’s events last year. Many of these teams went on
              to compete at the 2018 National Conference, including 8 national
              semi-finalist teams, 6 national finalist teams, a second place
              team in Software Development and 1st & 3rd place finishes in VEX
              robot skills and excellence awards respectively. We are also proud
              to have many of our students serve as state officers over the
              years.{" "}
            </HTHSDesc>
          </Description>
          <Facts className="no-scroll">
            <FactsTitle>Facts</FactsTitle>
            <FactsInfo>
              - The HTHS TSA chapter was founded in 1991
              <br />- The chapter currently has over 170 members, representing
              over 50% of the school’s population
              <br />- TSA is High Tech’s most popular club and extracurricular
              activity
            </FactsInfo>
          </Facts>
        </Container>
      </TotalContainer>
    );
  }
}
