import React, { Component } from "react";
import ShopItem from "../components/shop_item";
import Header from "../components/header";
import Head from "next/head";
import styled from "styled-components";
import Cart from "../components/cart";
import { headerItems } from "./design-brief";

const items = [
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Basic T shirt",
    price: 25.5,
    id: 1,
    picture: "/static/t-shirt.jpg"
  },
  {
    name: "Captcha! World Tour",
    price: 99.99,
    id: 1,
    picture: "/static/guitar.jpg"
  }
];

const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
  max-width: 960px;
  margin: 0 auto 30px;
  margin-top: 70px;
`;

const FloatingCart = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.open ? "0px" : "-450px")};
  width: 450px;
  height: 100%;
  background-color: #1b1a20;
  box-sizing: border-box;

  transition: right 0.2s;
`;

const TitleHead = styled.div`
  margin: 0px;
  background-color: black;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  font-size: 60px;
  letter-spacing: 0.6em;
  font-family: Raleway;
`;

export default class Shop extends Component {
  state = {
    enabled: true,
    cart: []
  };
  addToCart(item) {
    const cart = [...this.state.cart];
    for (let i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        cart[i].quantity++;
        this.setState({ cart });
        return;
      }
    }
    cart.push({
      quantity: 1,
      id: item.id,
      name: item.name,
      price: item.price,
      picture: item.picture,
      size: "M"
    });
    this.setState({ cart });
  }
  removeProduct(product) {
    let cart = [...this.state.cart];
    for (let i = 0; i < cart.length; i++) {
      if (product.id === cart[i].id) {
        cart.splice(i, 1);
        this.setState({ cart });
        return;
      }
    }
  }
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,800"
            rel="stylesheet"
          />
        </Head>
        <Header
          maxSize={1000}
          fullPageApi={val => this.setState({ enabled: val })}
          items={headerItems}
        />
        <Cart
          cartProducts={this.state.cart}
          removeProduct={product => this.removeProduct(product)}
        />
        <GridItems>
          {items.map(item => (
            <ShopItem item={item} addToCart={item => this.addToCart(item)} />
          ))}
        </GridItems>
        <style jsx global>{`
          body {
            margin: 0px;
            background-color: #111111;
          }
        `}</style>
      </div>
    );
  }
}
