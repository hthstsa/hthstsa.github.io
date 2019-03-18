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
  font-size: 70px;
  text-align: center;
  color: #fff;
  background-color: #000;
  display: inline-block;
  position: relative;

  &:before {
    content: "";
    background-image: url("/static/laptop-working.jpg");
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
    font-size: 40px;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 130px;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: calc(100% - 160px);
  max-width: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 1;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    height: 65%;
    width: 75%;
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
`;

const OfficerAvatar = styled(Avatar)`
  display: block;
  margin: 30px;
  height: 350px !important;
  width: auto !important;
`;

const OfficerName = styled.h1`
  font-family: "Raleway";
  font-size: 40px;
  text-align: center;
`;

const OfficerBio = styled.p`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin: 20px;
`;

export default class Officers extends Component {
  state = {
    tab: 0
  };
  render() {
    return (
      <TotalContainer>
        Officers
        <Container>
          <ActivitiesContainer>
            <Slider dots={false} infinite>
              <OfficerContainer>
                <OfficerAvatar src="/static/meeting.jpeg" />
                <OfficerName>Name</OfficerName>
                <OfficerBio>This is a bio.</OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar src="/static/meeting.jpeg" />
                <OfficerName>Name</OfficerName>
                <OfficerBio>This is a bio.</OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar src="/static/meeting.jpeg" />
                <OfficerName>Name</OfficerName>
                <OfficerBio>This is a bio.</OfficerBio>
              </OfficerContainer>
            </Slider>
          </ActivitiesContainer>
        </Container>
        <style jsx global>{`
          .slick-slider {
            height: 100%;
            opacity: 1;
            z-index: 2;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
          }
          .slick-track,
          .slick-list {
            height: 100%;
          }
          .slick-slide {
            background-color: #fafafa;
          }
        `}</style>
      </TotalContainer>
    );
  }
}
