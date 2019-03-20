import React, { Component } from "react";
import CartProduct from "../components/cart_product";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 60px;
  right: ${props => (props.open ? "0" : "-450px")};
  width: 450px;
  height: 100%;
  background-color: #1b1a20;
  box-sizing: border-box;
  font-family: "Raleway";

  @media only screen and (max-width: 640px) {
    width: 100%;
    right: ${props => (props.open ? "0" : "-100%")};
  }

  transition: right 0.2s;
`;

const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: #1b1a20;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: -50px;
  cursor: pointer;

  @media only screen and (max-width: 640px) {
    left: 0px;
    z-index: 2;
    background-color: #1b1a20;
  }

  &:hover {
    background-color: #212027;
  }
`;

const BagIcon = styled.span`
  width: 40px;
  height: 40px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: url("https://rawcdn.githack.com/jeffersonRibeiro/react-shopping-cart/ccf64841ddfdfedfce9821b2b7ff2c8075afb17c/src/static/bag-icon.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const BagIconClosed = styled(BagIcon)`
  position: absolute;
  background-color: #000;
  background-size: 50%;
  left: -60px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const BagQuantity = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: #eabf00;
  position: absolute;
  bottom: -5px;
  right: 0px;
`;

const BagQuantityClosed = styled(BagQuantity)`
  bottom: 5px;
  right: 10px;
`;

const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #0c0b10;
  }
`;

const CartHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

const CartHeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
`;

const ShelfContainer = styled.div`
  position: relative;
  min-height: 280px;
  padding-bottom: 200px;
`;

const ShelfFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: #1b1a20;

  &::before {
    content: "";
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;

const SubTotals = styled.div`
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

const Sub = styled(SubTotals)`
  width: 20%;
`;

const SubPrice = styled(SubTotals)`
  width: 80%;
  text-align: right;
`;

const SubPriceVal = styled.p`
  margin: 0;
  color: #eabf00;
  font-size: 22px;
`;

const CheckoutBtn = styled.div`
  color: #ececec;
  text-transform: uppercase;
  background-color: #0c0b10;
  text-align: center;
  padding: 15px 0;
  margin-top: 20px;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
  }
`;

export default class Cart extends Component {
  state = {
    open: false
  };

  openCart = () => {
    this.setState({ open: true });
  };

  closeCart = () => {
    this.setState({ open: false });
  };

  totalPrice(cartProducts) {
    let sum = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].price * cartProducts[i].quantity;
    }
    return sum;
  }

  totalQuantity(cartProducts) {
    let sum = 0;
    console.log("CART", cartProducts);
    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].quantity;
    }
    return sum;
  }

  render() {
    const { cartProducts, removeProduct } = this.props;
    console.log(cartProducts);
    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} key={p.id} />
      );
    });
    return (
      <Container open={this.state.open}>
        {this.state.open && (
          <CloseBtn onClick={() => this.closeCart()}>X</CloseBtn>
        )}
        {!this.state.open && (
          <BagIconClosed onClick={() => this.openCart()}>
            <BagQuantityClosed>
              {this.totalQuantity(cartProducts)}
            </BagQuantityClosed>
          </BagIconClosed>
        )}
        <CartContent>
          <CartHeader>
            <BagIcon>
              <BagQuantity>{this.totalQuantity(cartProducts)}</BagQuantity>
            </BagIcon>
            <CartHeaderTitle>Bag</CartHeaderTitle>
          </CartHeader>
          <ShelfContainer>{products}</ShelfContainer>
          <ShelfFooter>
            <Sub>SUBTOTAL</Sub>
            <SubPrice>
              <SubPriceVal>
                {`$ ${this.totalPrice(cartProducts).toFixed(2)}`}
              </SubPriceVal>
            </SubPrice>
            <CheckoutBtn>Checkout</CheckoutBtn>
          </ShelfFooter>
        </CartContent>
      </Container>
    );
  }
}
