import React, { Component } from "react";
import ReactDOM from "react-dom";
import ShopItem from "../components/shop_item";
import Header from "../components/header";
import styled from "styled-components";
import Cart from "../components/cart";
import { headerItems } from "./design-brief";

const items = [
  {
    name: "Hat",
    price: 25.49,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Hat.png"
  },
  {
    name: "Hoodie",
    price: 74.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Hoodie.jpg"
  },
  {
    name: "Long T-shirt",
    price: 44.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/longT.jpg"
  },
  {
    name: "Guitar Pick",
    price: 14.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Pick.jpg"
  },
  {
    name: "Polo",
    price: 54.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Polo.jpg"
  },
  {
    name: "String Bag",
    price: 34.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/StringBag.jpg"
  },
  {
    name: "Sweatshirt",
    price: 54.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Sweatshirt.jpg"
  },
  {
    name: "T shirt",
    price: 25.49,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/TShirt.jpg"
  },
  {
    name: "Wristband",
    price: 14.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/Wristband.jpg"
  },
  {
    name: '"Select All" World Tour',
    price: 99.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/guitar.jpg"
  },
  {
    name: "Try Again (EP)",
    price: 14.99,
    id: 1,
    picture: "https://hthstsa-af51.kxcdn.com/static/album.png"
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
  color: black;
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

class Shop extends Component {
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
      <div style={{ height: "100vh", width: "100vw", overflowY: "auto" }}>
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
            background-image: url("https://hthstsa-af51.kxcdn.com/static/clothes.jpg");
            background-size: cover;
          }
        `}</style>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(Shop), document.getElementById("root"));
