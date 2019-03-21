import React, { Component } from "react";
import styled from "styled-components";
import Create from "@material-ui/icons/Create";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import SettingsInputComponent from "@material-ui/icons/SettingsInputComponent";
import Keyboard from "@material-ui/icons/Keyboard";
import Computer from "@material-ui/icons/Computer";
import PowerInput from "@material-ui/icons/PowerInput";
import Train from "@material-ui/icons/Train";
import Landscape from "@material-ui/icons/Landscape";
import Build from "@material-ui/icons/Build";
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
                Introduction to Engineering Design (abbreviated IED) is a class
                focused on how to create product designs, both by hand and using
                CAD software. The course follows the Project Lead the Way
                curriculum and utilizes the Autodesk Inventor software to teach
                students CAD modeling.
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
                Computer Integrated Manufacturing (abbreviated CIM) teaches
                students about the history, methods, and details of
                manufacturing. Also following the PLTW curriculum, the course
                begins with an overview of manufacturing. Later, students learn
                the various types of manufacturing and use Autodesk Inventor
                software to practice manufacturing strategies.
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
                Principles of Engineering introduces students to a broad range
                of engineering topics, such as mechanisms, the strength of
                structures and materials, and automation. The latter half of the
                year is mainly spent on VEX robotics and programming. The class
                is closely related to and borrows many concepts from physics,
                another sophomore class, which deepens students’ understanding
                of the subject. Students develop problem-solving, research, and
                design.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="10th Grade"
              iconStyle={{ background: "#a0203e", color: "#fff" }}
              icon={<Keyboard />}
            >
              <h3>AP Computer Science</h3>
              <h4>Mr. Borchardt</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade (Elective)"
              iconStyle={{ background: "#c4601d", color: "#fff" }}
              icon={<Computer />}
            >
              <h3>Computer Science &amp; Software Engineering</h3>
              <h4>Mr. Hanas</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade (Elective)"
              iconStyle={{ background: "#c4a81d", color: "#fff" }}
              icon={<PowerInput />}
            >
              <h3>Digital Electronics</h3>
              <h4>Mr. Borchardt</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade (Elective)"
              iconStyle={{ background: "#1dad82", color: "#fff" }}
              icon={<Train />}
            >
              <h3>Civil Engineering and Architecture</h3>
              <h4>Ms. Garrity</h4>
              <p>
                Civil Engineering and Architecture is a course that introduces
                students to both the aesthetic and technical aspects of building
                structures. Students will learn about the elements of design
                from examples around the world and different historical styles
                of architecture. They will learn about zoning buildings, the
                different layers of a building, and the electrical and water
                systems that power a home. Through all of this, students will
                also be taught how to design for accessibility and environmental
                responsibility.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade (Elective)"
              iconStyle={{ background: "#1d27ad", color: "#fff" }}
              icon={<Landscape />}
            >
              <h3>Biological Engineering &amp; Environmental Sustainability</h3>
              <h4>Dr. Ellsworth</h4>
              <p>
                In Biological Engineering and Environmental Science (BEES),
                students see the relationship between the two subject areas and
                how they are becoming more and more integrated. A main portion
                of the course is spent identifying and exploring three major
                issues in the world today: access to food, clean water
                availability, and renewable energy. The class teaches students
                how biotechnology is increasing access and coverage of these
                necessities.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="12th Grade"
              iconStyle={{ background: "#a50192", color: "#fff" }}
              icon={<Build />}
            >
              <h3>Engineering Design &amp; Development</h3>
              <h4>Ms. Grunthaner &amp; Dr. Eng</h4>
              <p>
                The epitome of the High Technology High School STEM curriculum
                is with the Engineering Design and Development (EDD) class taken
                during their senior year. This Project Lead the Way class
                features a senior capstone project in which students must work
                in teams to either invent or modify an existing technology.
                Students utilize the engineering design loop to design, plan,
                build, and document a marketable product. By the end of the
                class, the students must submit a written report detailing their
                product along with presenting their project to a panel of
                industry professionals.
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
