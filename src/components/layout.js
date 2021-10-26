import React from "react"
import Helmet from "react-helmet"

const  Layout = ({ pageTitle, children }) => (
    <>
        <Helmet>
            <title>{`NorthernHerpetoculture | ${pageTitle}`}</title>
        </Helmet>
        <div>
            <header>
                <h1>Northern-Herpetoculture-GeckoTracker</h1>
                <nav>
                    <ul>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</footer>
        </div>
    </>
)

export default Layout;