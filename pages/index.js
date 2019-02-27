import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import MainPage from '../components/main_page'
import OnePage from '../components/one_page'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ReactPageScroller from 'react-page-scroller'

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
                </Head>
                <Header maxSize={1000} />
                <ReactPageScroller>
                    <MainPage />
                    <OnePage>
                        <h1>Hello2</h1>
                    </OnePage>
                </ReactPageScroller>
                <style jsx global>{`
                    body {
                        margin: 0px;
                    }
                `}</style>
            </div>
        );
    }
}

export default Index;
