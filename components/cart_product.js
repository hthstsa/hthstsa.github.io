import React, { Component } from "react";
import styled from "styled-components";

const DeleteBtn = styled.div`
  width: 16px;
  height: 16px;
  top: 15px;
  right: 5%;
  border-radius: 50%;
  position: absolute;
  background-size: auto 100%;
  background-image: url("https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/sprite_delete-icon.png");
  background-repeat: no-repeat;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-position-x: -17px;
  }
`;

const ShelfItem = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5%;

  transition: background-color 0.2s, opacity 0.2s;

  &::before {
    content: "";
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

const ThumbnailContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  margin-right: 3%;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  width: 57%;
  display: inline-block;
  vertical-align: middle;
  ${DeleteBtn}:hover ~ & {
    text-decoration: line-through;
    opacity: 0.6;
  }
`;

const Title = styled.p`
  color: #ececec;
  margin: 0;}
`;

const Description = styled.p`
  color: #5b5a5e;
  margin: 0;
`;

const Price = styled.div`
  color: #eabf00;
  text-align: right;
  width: 25%;
  display: inline-block;
  vertical-align: middle;
`;

class CartProduct extends Component {
  render() {
    const { product, removeProduct } = this.props;

    return (
      <ShelfItem>
        <DeleteBtn onClick={() => removeProduct(product)} />
        <ThumbnailContainer>
          <img src={product.picture} alt={product.name} />
        </ThumbnailContainer>
        <Details>
          <Title>{product.name}</Title>
          <Description>
            {`${product.size}`} <br />
            Quantity: {product.quantity}
          </Description>
        </Details>
        <Price>
          <p>{`$ ${product.price.toFixed(2)}`}</p>
        </Price>
      </ShelfItem>
    );
  }
}

export default CartProduct;
