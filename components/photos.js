import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
`;

const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
  }
  @media (max-width: 275px) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(6, auto);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export default class Photos extends Component {
  render() {
    return (
      <Container className="section fp-noscroll">
        <Grid>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Masterplan_%28band%29_-_B%C3%B6rsencrash_Festival_Wuppertal_2016-AL2155.jpg" />
        </Grid>
      </Container>
    );
  }
}
