import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const NotFoundPage = () => {
  const dog = useStaticQuery(
    graphql`
      query Dog404 {
        file(relativePath: { eq: "404-dog.png" }) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `
  ).file.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className="flex items-center">
        <div className="container flex flex-col md:flex-row mt-10 justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">4-Woof-4</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-primary-800 bg-primary-500 rounded-b-lg"
            >
              BACK TO HOMEPAGE
            </Link>
          </div>
          <GatsbyImage
            image={dog}
            alt="404 not found"
            className="w-40 mt-10 md:mt-0"
          />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
