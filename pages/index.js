import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import MainPage from '../components/main_page';
import OnePage from '../components/one_page';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ReactFullpage from '@fullpage/react-fullpage';

library.add(faBars);

class Index extends React.Component {
    state = {
        enabled: true,
    };
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
                <Header
                    maxSize={1000}
                    fullPageApi={val => this.setState({ enabled: val })}
                />
                <ReactFullpage
                    navigation
                    anchors={["section1", "section2"]}
                    render={({ state, fullpageApi }) => {
                        if (fullpageApi) {
                            fullpageApi.setAllowScrolling(this.state.enabled);
                        }
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <p>Section 1 (welcome to fullpage.js)</p>
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        Click me to move down
                                    </button>
                                </div>
                                <div className="section">
                                    <OnePage>Test</OnePage>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
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
