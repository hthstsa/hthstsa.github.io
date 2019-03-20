import React, { Component } from "react";
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100%;
  font-family: "Raleway";
  font-size: 20px;
  background-color: #4b5d7a;
  text-align: center;
  color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export default class Footer extends Component {
  render() {
    return (
      <TotalContainer>
        Webmaster Team T2084-1 <br /> Copyright © 2019. High Technology High
        School TSA
      </TotalContainer>
    );
  }
}
