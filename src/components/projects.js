import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Avatar from "@material-ui/core/Avatar";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 6vmax;
  text-align: center;
  color: #fff;
  background-color: #000;
  display: inline-block;
  position: relative;

  &:before {
    content: "";
    background-image: url("https://hthstsa-af51.kxcdn.com/static/drawing.jpg");
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

  @media screen and (min-width: 1300px) {
    font-size: 78px;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 30vw;
  height: 60vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 1;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    height: 130vw;
    width: 75vw;
  }
  @media only screen and (min-width: 133vh) {
    height: 67vh;
    width: 40vh;
  }
`;

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  background-color: #fafafa;
  color: #000;
`;

const OfficerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-around;
  overflow-y: auto;
`;

const OfficerAvatar = styled(Avatar)`
  position: relative !important;
  width: calc(100% - 60px) !important;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  height: auto !important;
  &:before {
    content: "";
    display: block;
    padding-top: 100% !important;
  }
`;

const OfficerName = styled.div`
  font-family: "Raleway";
  font-size: calc(2vh + 2vw);
  font-weight: 400;
  text-align: center;
  padding-top: 20px;
  @media screen and (min-width: 1300px) {
    font-size: 52px;
  }
`;

const OfficerBio = styled.p`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 1.5vmax;
  text-align: center;
  margin: 20px;
  @media screen and (min-width: 1300px) {
    font-size: 19px;
  }
`;

export default class Projects extends Component {
  state = {
    tab: 0
  };
  render() {
    return (
      <TotalContainer>
        Projects
        <Container>
          <ActivitiesContainer>
            <Slider dots={false} infinite>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/SoccerTower.PNG"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Soccer Tower</OfficerName>
                <OfficerBio>
                  The soccer tower project is one of the most popular projects
                  of POE. It involves the design and construction of an eight
                  foot tall newspaper tower that can hold the weight of a soccer
                  ball. Weight, appearance, and strength were all factors taken
                  into consideration when grading the project.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/CSEFinalProject.PNG"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Chart.IT</OfficerName>
                <OfficerBio>
                  This project is one example of the capstone project that makes
                  up a large portion of the CSE curriculum. This particular site
                  was designed and created to help students at High Tech create
                  various charts online including flowcharts, mind maps, binary
                  tree diagrams, hierarchical diagrams, and venn diagrams.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/EDDFinal.PNG"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Walker</OfficerName>
                <OfficerBio>
                  This is one example of a senior capstone device. This
                  attachment was designed to be added to walkers to provide
                  backwards stability in elderly patients who often suffer from
                  backwards disequilibrium. This device was to provide
                  additional support once the walker was leaning backwards.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/BEES.png"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>GMOs</OfficerName>
                <OfficerBio>
                  A project that was done in BEES was to test different food
                  products to see whether they contain genetically modified
                  organisms. This was done through the process of
                  electrophoresis. The picture above shows the results of the
                  electrophoresis gel test for pancake mix, which indicate that
                  it does have GMOs.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/CEA.png"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Home</OfficerName>
                <OfficerBio>
                  In this project, students were tasked with designing a tiny,
                  mobile home that was sustainable and LEED certified. Along
                  with this landscape view of the house, they had to provide
                  drawings and plans for the foundation, roof, and assembly of
                  the home.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="https://hthstsa-af51.kxcdn.com/static/COPE.PNG"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Square Root Calculator</OfficerName>
                <OfficerBio>
                  This was a sample project that made up the AP Computer Science
                  curriculum. It was a square root calculator with a simple
                  interface programmed in JAVA.
                </OfficerBio>
              </OfficerContainer>
            </Slider>
          </ActivitiesContainer>
        </Container>
        <style jsx global>{`
          .slick-slider {
            height: 100%;
            opacity: 1;
            z-index: 2;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          }
          .slick-track,
          .slick-list {
            height: 100%;
          }
          .slick-slide {
            background-color: #fafafa;
          }
          .slick-slide > div {
            height: 100%;
            width: 100%;
          }
          .avatar {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            min-height: 100%;
            min-width: 100%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </TotalContainer>
    );
  }
}
