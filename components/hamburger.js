import React from 'react';
import './hamburgers.css';

class Hamburger extends React.Component {
    render() {
        return (
            <button
                className={
                    'hamburger hamburger--spin' +
                    (this.props.smallMenuOpen ? ' is-active' : '')
                }
                type="button"
                onClick={() => this.props.setOpen(!this.props.smallMenuOpen)}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner" />
                </span>
                <style jsx>{`
                    .hamburger-inner,
                    .hamburger-inner::before,
                    .hamburger-inner::after {
                        background-color: #f2f5f9 !important;
                    }
                    .hamburger {
                        margin: 15px;
                        transform: scale(0.75);
                        z-index: 10;
                        position: relative;
                    }
                `}</style>
            </button>
        );
    }
}

export default Hamburger;
