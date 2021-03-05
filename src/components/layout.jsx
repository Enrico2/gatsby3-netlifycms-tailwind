import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { ResponsiveHelper } from "./responsiveHelper"

import Header from "./header"
import { Footer } from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-800 to-primary-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col h-full relative mx-auto z-10 bg-white shadow-md lg:w-full min-h-screen">
            {/*<ResponsiveHelper />*/}
            <Header siteTitle={data.site.siteMetadata.title} />
            <main
              className="
                mt-4 mx-auto max-w-7xl px-4 mb-auto w-full
                sm:mt-6 sm:px-6
                lg:px-8"
            >
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
