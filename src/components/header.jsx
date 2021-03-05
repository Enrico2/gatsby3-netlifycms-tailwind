import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const headerLogo = useStaticQuery(graphql`
    query LogoHeaderQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 45, layout: CONSTRAINED)
        }
      }
    }
  `).file.childImageSharp.gatsbyImageData

  const [isOpen, setIsOpen] = useState(false)

  const Links = ({ className }) => (
    <>
      <Link to="/" className={className} role="menuitem">
        Home
      </Link>
      <Link to="/articles" className={className} role="menuitem">
        Articles
      </Link>
      <Link to="/about-us" className={className} role="menuitem">
        About us
      </Link>
    </>
  )

  return (
    <header>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 sm:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 sm:flex-grow-0">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link to="/">
                <GatsbyImage
                  image={headerLogo}
                  className="h-10 w-10 sm:h-10"
                  alt={`${siteTitle} logo`}
                />
              </Link>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  id="main-menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="hidden sm:ml-10 sm:pr-4 sm:space-x-8 sm:flex sm:flex-nowrap"
            role="menu"
            aria-orientation="horizontal"
            aria-labelledby="main-menu"
          >
            <Links className="font-medium text-gray-500 hover:text-gray-900" />
          </div>
        </nav>
      </div>

      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden z-50">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-2 pt-4 flex items-center justify-between">
              <div>
                <GatsbyImage
                  image={headerLogo}
                  className="h-10 w-10 sm:h-10"
                  alt={`${siteTitle} logo`}
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Close main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-3 pt-2 pb-3 space-y-1" role="none">
                <Links className="block py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
