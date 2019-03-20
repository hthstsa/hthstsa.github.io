import React, { Component } from "react";
import styled from "styled-components";

const tours = [
  {
    date: "APR 29",
    year: "2019",
    name: "Park Theater",
    location: "LAS VEGAS, NV"
  },
  {
    date: "MAY 13",
    year: "2019",
    name: "The Fillmore",
    location: "SAN FRANCISCO, CA"
  },
  {
    date: "JUNE 11",
    year: "2019",
    name: "Madison Square Garden",
    location: "NEW YORK, NY"
  },
  {
    date: "AUG 13",
    year: "2019",
    name: "La Maroquinerie",
    location: "PARIS, FRANCE"
  },
  {
    date: "SEP 07",
    year: "2019",
    name: "Loppen",
    location: "COPENHAGEN, DENMARK"
  }
];

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  background-image: url("https://hthstsa-af51.kxcdn.com/static/band-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`;

const Title = styled.h1`
  flex: 0 1 auto;
  margin-top: 100px;
  margin-left: 15%;
  font-family: "Raleway";
  color: #fff;
`;

const TourTable = styled.table`
  margin-left: 15%;
`;

const DateRow = styled.td`
  width: 100px;
  color: #fff;
  font-family: "Raleway";
  font-weight: 800;
`;

const LocationRow = styled.td`
  width: 300px;
  color: #fff;
  font-family: "Raleway";
`;

const LocationName = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const LocationPlace = styled.div`
  font-size: 15px;
  margin-bottom: 15px;
`;

const TicketButton = styled.div`
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #ff3f46;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:focus:before,
  &:hover:before,
  &:active:before {
    right: 0;
  }

  width: ${props => (props.small ? "75px" : "100px")};
  height: ${props => (props.small ? "35px" : "50px")};
  background-color: transparent;
  border: 2px solid #fff;

  color: #fff;
  text-align: center;
  vertical-align: middle;
  line-height: ${props => (props.small ? "35.5px" : "50px")};
  font-family: "Raleway";
  font-size: ${props => (props.small ? "15px" : "20px")};
`;

const TicketRow = styled.td`
  width: 100px;
`;

const TableContainer = styled.div``;

export default class Tour extends Component {
  state = {
    width: 0
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ small: window.innerWidth < 450 });
  }
  render() {
    return (
      <Container className="section">
        <Title>"SELECT ALL" WORLD TOUR</Title>
        <TableContainer>
          <TourTable>
            <tbody>
              {tours.map(tour => (
                <tr>
                  <DateRow>
                    {tour.date}
                    <br /> {tour.year}
                  </DateRow>
                  <LocationRow>
                    <LocationName>{tour.name}</LocationName>
                    <LocationPlace>{tour.location}</LocationPlace>
                    {this.state.small && (
                      <TicketButton
                        onClick={() => (window.location = "/shop")}
                        small={this.state.small}
                      >
                        TICKETS
                      </TicketButton>
                    )}
                  </LocationRow>
                  {!this.state.small && (
                    <TicketRow>
                      <TicketButton
                        onClick={() => (window.location = "/shop")}
                        small={this.state.small}
                      >
                        TICKETS
                      </TicketButton>
                    </TicketRow>
                  )}
                </tr>
              ))}
            </tbody>
          </TourTable>
        </TableContainer>
        <style jsx global>
          {`
            .fp-tableCell {
              vertical-align: baseline !important;
            }
          `}
        </style>
      </Container>
    );
  }
}
