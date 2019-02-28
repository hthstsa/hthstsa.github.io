import React from 'react';
import styled from 'styled-components';
import Hamburger from './hamburger';
import posed from 'react-pose';

const LargeMenu = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 100%;
    @media screen and (max-width: ${props => props.size}px) {
        display: none;
    }
    width: 100vw;
    background-color: #242526;
    opacity: 0.7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 2;
`;

const SmallMenu = styled(LargeMenu)`
    display: none;
    justify-content: space-between;
    @media screen and (max-width: ${props => props.size}px) {
        display: flex;
    }
    z-index: 2;
`;

const Container = styled.div`
    position: fixed;
    top: 0px;
    height: 55px;
    z-index: 1;
`;

const NavItem = styled.a`
    color: #f2f5f9;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    margin: 25px;
    text-decoration: none;
`;

const MobileMenuStyle = styled.div`
    transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    width: 100vw;
    height: 100vh;
    background-color: #242526;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const MobileItemStyle = styled.a`
    color: #f2f5f9;
    text-align: center;
    width: 100%;
    font-size: 300%;
    margin: 40px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    text-decoration: none;
`;

const MobileMenu = posed(MobileMenuStyle)({
    visible: {
        x: 0,
        y: '0vh',
        delayChildren: 600,
        staggerChildren: 100,
    },
    hidden: {
        x: 0,
        y: '100vh',
    },
    initialPose: 'hidden',
});

const MobileItem = posed(MobileItemStyle)({
    visible: {
        y: 0,
        transition: 'easeIn',
    },
    hidden: {
        y: '100vh',
    },
});

class Header extends React.Component {
    state = {
        smallMenuOpen: false,
    };

    openCloseMenu(val) {
        this.setState({ smallMenuOpen: val });
        this.props.fullPageApi(!val);
    }

    render() {
        return (
            <Container>
                <LargeMenu size={750}>
                    <NavItem href="#">Hello</NavItem>
                    <NavItem href="#">Main</NavItem>
                    <NavItem href="#">You</NavItem>
                </LargeMenu>
                <SmallMenu size={750}>
                    <NavItem>Main</NavItem>
                    <Hamburger
                        smallMenuOpen={this.state.smallMenuOpen}
                        setOpen={val => this.openCloseMenu(val)}
                    />
                    <MobileMenu
                        pose={this.state.smallMenuOpen ? 'visible' : 'hidden'}
                    >
                        <MobileItem href="#">Hello</MobileItem>
                        <MobileItem href="#">You</MobileItem>
                    </MobileMenu>
                </SmallMenu>
            </Container>
        );
    }
}

export default Header;
