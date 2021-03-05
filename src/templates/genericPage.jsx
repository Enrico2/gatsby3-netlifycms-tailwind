import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { markdown } from "../styles/markdown.module.css"

const GenericPage = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <div
        className={markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export default GenericPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
