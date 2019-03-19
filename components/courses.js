import React, { Component } from "react";
import styled from "styled-components";
import WorkIcon from '@material-ui/icons/Work';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

const Info = styled.p`
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
        <Icons><WorkIcon /></Icons>
        <Info>
<VerticalTimeline>
  <VerticalTimelineElement
    date="9th Grade"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3>Creative Director</h3>
    <h4>Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
        </Info>
        <style jsx global>{`
        .vertical-timeline-element-date {
          color: #FFF !important;
        }
        .vertical-timeline-element-content {
          color: #000 !important;
        }
        `}</style>
      </Container>
    );
  }
}
