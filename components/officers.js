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
    background-image: url("https://hthstsa-af51.kxcdn.com/static/officer-background.jpeg");
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
  font-size: 4vmax;
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
                <OfficerAvatar
                  src="/static/Anjali.jpg"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Anjali Chakradhar</OfficerName>
                <OfficerBio>
                  Anjali Chakradhar is a senior at High Technology High School.
                  She is interested in medicine and loves exploring new places
                  with her friends.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="/static/Karena.jpg"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Karena Yan</OfficerName>
                <OfficerBio>
                  Karena Yan is a senior at High Technology High School. She
                  hopes to study environmental engineering in the future and is
                  an avid dancer.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="/static/Daniel.jpg"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Daniel Du</OfficerName>
                <OfficerBio>
                  Daniel Du is a senior at High Technology High School. He plans
                  on studying the intersection between biomedical engineering
                  and neuroscience and enjoys playing guitar in his free time.
                </OfficerBio>
              </OfficerContainer>
              <OfficerContainer>
                <OfficerAvatar
                  src="/static/Khushi.jpg"
                  classes={{ img: "avatar" }}
                />
                <OfficerName>Khushi Sabuwala</OfficerName>
                <OfficerBio>
                  Khushi Sabuwala is a sophomore at High Technology High School.
                  She likes to play the trumpet, dance, and watch football in
                  her free time.
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
