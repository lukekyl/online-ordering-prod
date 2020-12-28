import React from "react"
import PropTypes from "prop-types"

import '../styles/layout.css';

const Layout = ({ children }) => {

    return (
        <>
        <div className="App">
            <header className="App-header">
            <h2>Online Ordering App</h2>
            </header>
            <main>
                {children}
            </main>
            <footer>
            Footer
            </footer>
        </div>
        </>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout