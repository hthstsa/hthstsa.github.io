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
  font-size: 2vmax;
  @media screen and (min-width: 1460px) {
    font-size: 29px;
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
    padding-bottom: 20px;
  }
  & td:last-child {
    width: 1%;
    white-space: nowrap;
  }
  margin-top: 20px;
  margin-bottom: 20px;
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
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>2nd 🥈</td>
      </tr>
      <tr>
        <td>HTHS</td>
        <td>1st 🥇</td>
        <td>Webmaster</td>
        <td>3rd 🥉</td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>1st 🥇</td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>1st 🥇</td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>1st 🥇</td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>1st 🥇</td>
      </tr>
      <tr>
        <td>Webmaster</td>
        <td>1st 🥇</td>
        <td>HTHS</td>
        <td>1st 🥇</td>
      </tr>
    </AwardsTable>
  </Content>
);

export default class Awards extends Component {
  render() {
    return (
      <TotalContainer>
        <FullTitle>Awards</FullTitle>
        <Container>
          <ActivitiesContainer>
            <StateConference />
          </ActivitiesContainer>
        </Container>
      </TotalContainer>
    );
  }
}
