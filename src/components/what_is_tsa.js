import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Title = styled.h1`
  flex: 0 1 auto;
  margin-top: 100px;
  margin-left: 15%;
  font-family: "Raleway";
  font-size: 50px;
  color: #fff;
`;
const TitleInside = styled(Title)`
  margin-left: 0%;
  margin-top: 50px;
`;

const Info = styled.p`
  margin-left: 15%;
  margin-right: 15%;
  font-family: "Raleway";
  color: #fff;
  font-size: 25px;
`;

export default class WhatIsTSA extends Component {
  render() {
    return (
      <Container>
        <Title>ABOUT TSA</Title>
        <Info>
          The Technology Student Association (TSA) enhances personal
          development, leadership, and career opportunities in science,
          technology, engineering, and math (STEM), whereby members apply and
          integrate these concepts through intracurricular activities,
          competitions, and related programs.
          <TitleInside>CREED</TitleInside>I believe that Technology Education
          holds an important place in my life in the technical world. I believe
          there is a need for the development of good attitudes concerning work,
          tools, materials, experimentation, and processes of industry. Guided
          by my teachers, artisans from industry, and my own initiative, I will
          strive to do my best in making my school, community, state, and nation
          better places in which to live. I will accept the responsibilities
          that are mine. I will accept the theories that are supported by proper
          evidence. I will explore on my own for safer, more effective methods
          of working and living. I will strive to develop a cooperative attitude
          and will exercise tact and respect for other individuals. Through the
          work of my hands and mind, I will express my ideas to the best of my
          ability. I will make it my goal to do better each day the task before
          me, and to be steadfast in my belief in my God, and my fellow
          Americans.
        </Info>
      </Container>
    );
  }
}
