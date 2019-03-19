import React, { Component } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

  @media screen and (min-width: 1460px) {
    font-size: 87px;
  }

  &:before {
    content: "";
    background-image: url("https://hthstsa-af51.kxcdn.com/static/conference.jpg");
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
  width: 50%;
  height: 50%;
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

const Title = styled.h1`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 3vmax;
  margin-left: 40px;
  margin-top: 40px;
  @media screen and (min-width: 1460px) {
    font-size: 44px;
  }
`;

const Content = styled.p`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 2vmax;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
  @media screen and (min-width: 1460px) {
    font-size: 29px;
  }
`;

const RightImage = styled.img`
  margin: 5%;
  max-width: 90%;
  max-height: 90%;
`;

const LeftContainer = styled.div`
  float: left;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

const RightContainer = styled.div`
  float: right;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

const StateConference = props => (
  <div>
    <LeftContainer>
      <Title>State Conference</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="https://hthstsa-af51.kxcdn.com/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

const NationalConference = props => (
  <div>
    <LeftContainer>
      <Title>National Conference</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="https://hthstsa-af51.kxcdn.com/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

export default class Competitions extends Component {
  state = {
    tab: 0
  };
  render() {
    return (
      <TotalContainer>
        Competitions
        <Container>
          <ActivitiesContainer>
            <Tabs
              value={this.state.tab}
              onChange={(event, value) => this.setState({ tab: value })}
              variant="scrollable"
              scrollButtons="auto"
              id="scroller"
            >
              <Tab label="State Conference" />
              <Tab label="National Conference" />
            </Tabs>
            {this.state.tab == 0 && <StateConference />}
            {this.state.tab == 1 && <NationalConference />}
          </ActivitiesContainer>
        </Container>
      </TotalContainer>
    );
  }
}
