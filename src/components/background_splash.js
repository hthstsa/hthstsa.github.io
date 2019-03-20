import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 70px;
  color: #fff;
  background-color: #000;

  &:after {
    content: "";
    background-image: url(${props => props.url});
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

export default class Background extends Component {
  render() {
    return <Container url={this.props.url}>{this.props.children}</Container>;
  }
}
