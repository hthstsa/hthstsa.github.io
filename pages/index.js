import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Raleway:400,800"
                        rel="stylesheet"
                    />
                    <link href="/static/hamburgers.css" rel="stylesheet" />
                </Head>
                <Header maxSize={1000} />
                <style jsx global>{`
                    body {
                        background-color: #2e2e30;
                        height: 100vh;
                        width: 100vw;
                        margin: 0px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;
