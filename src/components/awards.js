import React, { Component } from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 6vmax;
  color: #fff;
  background-color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1460px) {
    font-size: 87px;
  }

  &:before {
    content: "";
    background-image: url("https://hthstsa-af51.kxcdn.com/static/awards.png");
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
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 1;
  z-index: 2;
  @media only screen and (max-width: 700px) {
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

const Content = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 1.5vmax;
  @media screen and (min-width: 1460px) {
    font-size: 22px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AwardsTable = styled.table`
  width: 93%;
  & tr:not(:last-child) td {
    padding-bottom: 0px;
  }
  & td:last-child {
    width: 1%;
    white-space: nowrap;
  }
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

const FullTitle = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StateConference = props => (
  <Content>
    <AwardsTable>
      <tr>
        <td>Animatronics</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>Biomimicry</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Chapter Team</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>Coding (Team 1)</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Engineering Design</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>On Demand Video</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Optical Engineering</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>Structural Design and Engineering</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Technology Bowl</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>System Control Technology (Team 1)</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Transportation Modeling</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>VEX Robotics (Tournament)</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>VEX Robotics (Skills)</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
        <td>Video Game Design</td>
        <td>
          <i className="em em-first_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Digital Video Production</td>
        <td>
          <i className="em em-second_place_medal" />
        </td>
        <td>Photographic Technology</td>
        <td>
          <i className="em em-second_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Software Development</td>
        <td>
          <i className="em em-second_place_medal" />
        </td>
        <td>STEM Careers</td>
        <td>
          <i className="em em-second_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Biotechnology Design</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
        <td>CAD, Engineering</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
      </tr>
      <tr>
        <td>CIM</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
        <td>Coding (Team 2)</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
      </tr>
      <tr>
        <td>SciVis</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
        <td>System Control Technology (Team 2)</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>
          <i className="em em-third_place_medal" />
        </td>
      </tr>
    </AwardsTable>
  </Content>
);

export default class Awards extends Component {
  render() {
    return (
      <TotalContainer>
        <FullTitle>Awards (2018)</FullTitle>
        <Container>
          <ActivitiesContainer>
            <StateConference />
          </ActivitiesContainer>
        </Container>
      </TotalContainer>
    );
  }
}
