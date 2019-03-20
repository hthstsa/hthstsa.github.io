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
        <Title>WHAT IS TSA?</Title>
        <Info>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          efficitur dolor lacus, id feugiat diam posuere nec. Quisque laoreet
          vestibulum hendrerit. Ut justo leo, sagittis ac urna in, finibus
          tempus quam. Aenean consequat magna et turpis posuere, non ullamcorper
          risus elementum. Etiam ac augue mattis, lacinia nibh in, mollis eros.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          convallis justo at nulla rutrum euismod. Sed sodales luctus lectus.
          Suspendisse fermentum justo vitae dui mattis, quis feugiat mauris
          ultrices. Praesent vulputate mauris vel enim bibendum dignissim.
          Aliquam volutpat augue sapien, eu fermentum tortor sodales at. Sed
          venenatis ut augue at faucibus. Phasellus mollis elit ac neque
          lacinia, eleifend rhoncus quam facilisis. Phasellus rhoncus velit
          quam, quis aliquet eros pretium mattis. Sed commodo erat et iaculis
          laoreet. Quisque ultricies, velit a tincidunt ullamcorper, urna lectus
          pellentesque ipsum, non congue magna nulla nec dui. In metus augue,
          condimentum vel blandit non, egestas a libero. Nam sagittis ante leo,
          quis gravida ante accumsan ac. Integer fringilla leo sed velit
          pharetra congue. Aliquam erat volutpat. Phasellus at nibh felis.
          Aliquam aliquet feugiat lorem a scelerisque. Quisque ut semper velit,
          vel facilisis urna. Nullam tempor quam vitae sagittis vulputate. Ut
          commodo orci vitae purus tincidunt, at suscipit neque imperdiet.
          Aliquam efficitur tellus quis fermentum gravida. In venenatis suscipit
          posuere. Cras elit massa, interdum a tristique mollis, rutrum
          scelerisque arcu. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Fusce placerat sapien eu
          felis fringilla tristique. Fusce a convallis sem. Curabitur pharetra
          congue maximus.
        </Info>
      </Container>
    );
  }
}
