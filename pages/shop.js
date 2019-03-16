import React, { Component } from 'react';
import ShopItem from '../components/shop_item'
import Header from '../components/header'
import Head from 'next/head'
import styled from 'styled-components';

const items = [
    {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    },
        {
        name: "Basic T shirt",
        price: 25.50,
        id: 1,
        picture: '/static/t-shirt.jpg'
    }
]

const GridItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    max-width: 960px;
    margin: 0 auto 30px;
    margin-top: 70px;
`

const FloatingCart = styled.div`
    position: fixed;
    top: 0;
    right: ${props => props.open ? '0px' : '-450px'};
    width: 450px;
    height: 100%;
    background-color: #1b1a20;
    box-sizing: border-box;

    transition: right 0.2s;
`

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
`

export default class Shop extends Component {
    state = {
        enabled: true,
    };
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
                />
                <GridItems>
                    {
                        items.map(item => (
                            <ShopItem item={item} />
                        ))
                    }
                </GridItems>
                <style jsx global>{`
                    body {
                        margin: 0px;
                    }
                `}</style>
            </div>
        )
    }
}