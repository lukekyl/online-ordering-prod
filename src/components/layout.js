import React from "react"
import PropTypes from "prop-types"

import '../styles/layout.css';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {

    return (
        <>
        <div className="App">
            <Header />
            <main className="App-body">
                {children}
            </main>
            <Footer />
        </div>
        </>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout