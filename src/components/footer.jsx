import React from "react"
import { Link } from "gatsby"

const Newsletter = () => (
  <>
    <div className="flex justify-center">
      <div className="text-center text-lg font-bold lg:text-2xl lg:max-w-lg max-w-md">
        Sign-up to receive updates and never miss out on new tips, updates, and
        more.
      </div>
    </div>

    <div className="flex justify-center mt-6">
      <div className="bg-white rounded-lg w-80">
        <form name="newsletter" method="POST" data-netlify="true">
          {/* For Netflify */}
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="hidden" name="bot-field" />
          {/* For Netflify */}
          <div className="flex flex-wrap justify-between md:flex-row">
            <label>
              <input
                type="email"
                id="email"
                name="email"
                className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                placeholder="Enter your email"
                aria-label="email"
              />
            </label>
            <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
)

export const Footer = () => (
  <footer className="flex justify-center px-4 text-gray-100 bg-gradient-to-br from-gray-800 to-gray-600 pt-2 mt-12">
    <div className="container py-6">
      <Newsletter />

      <hr className="h-px mt-6 bg-gray-100 border-none" />

      <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
        <div>
          <Link to="/" className="text-xl font-bold">
            © {new Date().getFullYear()} My Site
          </Link>
        </div>
        <div>
          <div className="flex flex-col items-center mt-4 justify-between sm:flex-row md:mt-0">
            <Link to="/about-us/" className="px-4 text-sm">
              About us
            </Link>
            <a className="px-4 text-sm" href="mailto:this@isanemail.com">
              Contact us
            </a>
            <a href="https://twitter.com/rmgn">
              <svg
                className="h-5 w-5 fill-current text-white"
                viewBox="0 0 512 512"
              >
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
