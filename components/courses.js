import React, { Component } from "react";
import styled from "styled-components";
import Create from "@material-ui/icons/Create";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import SettingsInputComponent from "@material-ui/icons/SettingsInputComponent";
import Keyboard from "@material-ui/icons/Keyboard";
import Computer from "@material-ui/icons/Computer";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
const Icons = styled.div`
  flex: 0 1 auto;
  margin-top: 0px;
  margin-left: 15%;
  font-family: "Raleway";
  font-size: 50px;
  color: #fff;
`;

const Info = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  font-family: "Raleway";
  color: #fff;
  font-size: 25px;
`;

export default class Courses extends Component {
  render() {
    return (
      <Container>
        <Title>COURSES</Title>
        <Info>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="9th Grade"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Create />}
            >
              <h3>Intro to Engineering Design</h3>
              <h4>Ms. Grunthaner</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="9th Grade"
              iconStyle={{ background: "#4e9e34", color: "#fff" }}
              icon={<DeveloperBoard />}
            >
              <h3>Computer Integrated Manufacturing</h3>
              <h4>Ms. Garrity</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="10th Grade"
              iconStyle={{ background: "#601c87", color: "#fff" }}
              icon={<SettingsInputComponent />}
            >
              <h3>Principles of Engineering</h3>
              <h4>Mr. Hanas</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="10th Grade"
              iconStyle={{ background: "#a0203e", color: "#fff" }}
              icon={<Keyboard />}
            >
              <h3>Computer Programming for Engineers</h3>
              <h4>Mr. Borchardt</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade"
              iconStyle={{ background: "#a0203e", color: "#fff" }}
              icon={<Courses />}
            >
              <h3>Computer Science & Software Engineering</h3>
              <h4>Mr. Hanas</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Info>
        <style jsx global>{`
          .vertical-timeline-element-date {
            color: #fff !important;
          }
          .vertical-timeline-element-content {
            color: #000 !important;
          }
          .vertical-timeline {
            margin-top: 20px !important;
            margin-bottom: 150px !important;
          }
        `}</style>
      </Container>
    );
  }
}
