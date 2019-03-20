import React, { Component } from "react";
import styled from "styled-components";

const BuyBtn = styled.div`
  background-color: #1b1a20;
  color: #fff;
  padding: 15px 0;
  margin: 10px;
  cursor: pointer;

  transition: background-color 0.2s;
`;

const OuterItem = styled.div`
  height: 625px;
  margin: 0px;
  border: 1px solid transparent;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  background-color: whitesmoke;

  &:hover {
    border: 1px solid #eee;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  &:hover ${BuyBtn} {
    background-color: #eabf00;
  }
`;

const Image = styled.img`
  width: 90%;
  margin: 5%;
  height: 400px;
`;

const Title = styled.h1`
  font-family: "Raleway";
  font-size: 24px;
  text-align: center;
  margin: 10px;
  color: #000;
`;

const Stopper = styled.div`
  content: "";
  width: 30px;
  height: 2px;
  margin-left: calc(50% - 15px);
  margin-right: calc(50% - 15px);
  background-color: #eabf00;
  margin-bottom: 15px;
`;

const Price = styled.b`
  font-size: 1.5em;
  margin-left: 5px;
  color: #000;
`;

export default class ShopItem extends Component {
  render() {
    return (
      <OuterItem>
        <Image src={this.props.item.picture} />
        <Title>{this.props.item.name}</Title>
        <Stopper />
        <small style={{ color: "#000" }}>$</small>
        <Price>{this.props.item.price.toFixed(2)}</Price>
        <BuyBtn onClick={() => this.props.addToCart(this.props.item)}>
          Add to cart
        </BuyBtn>
      </OuterItem>
    );
  }
}
