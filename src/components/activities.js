import React, { Component } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

  @media screen and (min-width: 1460px) {
    font-size: 87px;
  }

  &:before {
    content: "";
    background-image: url("https://hthstsa-af51.kxcdn.com/static/laptop-working.jpg");
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
  @media screen and (min-width: 1240px) {
    font-size: 25px;
  }
`;

const RightImage = styled.img`
  margin: 5%;
  max-width: 90%;
  max-height: 90%;
`;

const LeftContainer = styled.div`
  float: left;
  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  height: calc(100% - 48px);
  overflow-y: auto;
`;

const GeneralMeetings = props => (
  <InnerContainer className="no-scroll">
    <LeftContainer>
      <Title>General Meetings</Title>
      <Content>
        At the beginning of the school year, the HTHS chapter officers hold a
        general interest meeting to attract new members to TSA, remind returning
        members to join the club, and explain any changes to the event selection
        process for the year. During the remainder of the school year, the
        chapter holds additional periodic meetings to help project teams set
        deadlines and stay on track.
      </Content>
    </LeftContainer>
  </InnerContainer>
);

const LeadershipConference = props => (
  <InnerContainer className="no-scroll">
    <LeftContainer>
      <Title>Leadership Conference</Title>
      <Content>
        In the fall, the HTHS TSA chapter officers attend a leadership
        conference along with their peers at other New Jersey high schools where
        they participate in team building activities and work with other
        officers to learn how they can continue to grow as leaders and how they
        can help improve their TSA chapter through their position’s
        responsibilities.
      </Content>
    </LeftContainer>
  </InnerContainer>
);

const CheckIns = props => (
  <InnerContainer className="no-scroll">
    <LeftContainer>
      <Title>Check Ins</Title>
      <Content>
        As the New Jersey TSA State Conference approaches, the HTHS TSA officers
        hold mandatory check-ins where they make sure that all teams are making
        progress on their projects and are on pace to complete all
        pre-conference events, to be prepared for on-site events, and to achieve
        their goals prior to the state conference.
      </Content>
    </LeftContainer>
  </InnerContainer>
);

const RelayForLife = props => (
  <InnerContainer className="no-scroll">
    <LeftContainer>
      <Title>Community Service</Title>
      <Content>
        Beginning in 2016, the HTHS TSA chapter has sent teams from each of the
        school’s classes to participate in the Middletown, NJ Relay for Life
        event annually in order to raise money for TSA’s National Service
        Project and contribute to the National Cancer Society. The HTHS TSA
        chapter raises funds for this charitable event through luminaria sales
        and through generous donations. At the Relay for Life event,
        participating chapter members get to hear the inspiring stories of
        cancer survivors and cancer researchers. Our TSA chapter is constantly
        working to increase participation in Relay for Life and to raise our
        yearly donation total.
      </Content>
    </LeftContainer>
  </InnerContainer>
);

const EndOfYear = props => (
  <InnerContainer className="no-scroll">
    <LeftContainer>
      <Title>End of Year Wrap Up</Title>
      <Content>
        At the conclusion of the TSA year, the HTHS TSA chapter gathers to
        reflect on and celebrate a successful year of learning and growing
        through TSA at the annual TSA club pizza party. Additionally, graduating
        chapter officers pass the torch off to the newly elected TSA officers
        who are ready to continue the storied legacy of HTHS TSA.
      </Content>
    </LeftContainer>
  </InnerContainer>
);

export default class Activities extends Component {
  state = {
    tab: 0
  };
  render() {
    return (
      <TotalContainer>
        Activities
        <Container>
          <ActivitiesContainer>
            <Tabs
              value={this.state.tab}
              onChange={(event, value) => this.setState({ tab: value })}
              variant="scrollable"
              scrollButtons="auto"
              id="scroller"
            >
              <Tab label="General Meetings" />
              <Tab label="Leadership Conference" />
              <Tab label="Check-Ins" />
              <Tab label="Community Service" />
              <Tab label="End of Year Wrap Up" />
            </Tabs>
            {this.state.tab == 0 && <GeneralMeetings />}
            {this.state.tab == 1 && <LeadershipConference />}
            {this.state.tab == 2 && <CheckIns />}
            {this.state.tab == 3 && <RelayForLife />}
            {this.state.tab == 4 && <EndOfYear />}
          </ActivitiesContainer>
        </Container>
      </TotalContainer>
    );
  }
}
