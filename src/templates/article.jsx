import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AskUsAnything, articleTimestamp, ToC } from "./helpers"
import { markdown } from "../styles/markdown.module.css"

const Article = ({ data }) => {
  const post = data.markdownRemark
  const timestamp = articleTimestamp(post.frontmatter.date)

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
        metaImage={{ src: post.frontmatter.featuredImg?.publicURL }}
      />
      <ToC
        title={post.frontmatter.title}
        tableOfContents={post.tableOfContents}
      />
      <div className={markdown}>
        <h1>{post.frontmatter.title}</h1>
        <div className="text-sm text-gray-500 pt-4">{timestamp}</div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <AskUsAnything title={post.frontmatter.title} />
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        featuredImg {
          publicURL
        }
      }
      tableOfContents
    }
  }
`
