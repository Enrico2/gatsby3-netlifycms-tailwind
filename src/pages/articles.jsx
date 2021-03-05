import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  let featuredImg = (
    <GatsbyImage
      image={article.featuredImg || article.fallbackImg}
      alt={article.title}
      className="w-full h-56 object-contain rounded-t-lg shadow-md"
    />
  )

  return (
    <Link
      to={article.slug}
      className="flex flex-col border rounded-lg shadow-lg transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
    >
      {featuredImg}
      <div className="flex flex-col p-2">
        <div className="text-gray-500 text-sm">
          {article.date} • {article.timeToRead} min read
        </div>
        <div className="font-bold text-lg py-2">{article.title}</div>
        <div className="text-gray-800">{article.excerpt}</div>
      </div>
      <div className="text-primary-600 font-bold pt-3 mt-auto px-2 pb-2 hover:underline">
        Read full article
      </div>
    </Link>
  )
}

const ArticlesPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map(edge => {
    return {
      date: edge.node.frontmatter.date,
      title: edge.node.frontmatter.title,
      excerpt: edge.node.excerpt,
      slug: edge.node.fields.slug,
      timeToRead: edge.node.timeToRead,
      featuredImg:
        edge.node.frontmatter.featuredImg?.childImageSharp?.gatsbyImageData,
      fallbackImg: data.file.childImageSharp.gatsbyImageData,
    }
  })

  return (
    <Layout>
      <Seo title="Articles" />
      <div className="text-base mb-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="block text-primary-600">Articles</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(a => (
          <ArticleCard article={a} key={a.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default ArticlesPage

export const query = graphql`
  query ArticlesQuery {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 320, layout: CONSTRAINED)
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { regex: "g/articles/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "hh:mm MM/DD/YYYY")
            title
            featuredImg {
              childImageSharp {
                gatsbyImageData(width: 320, layout: CONSTRAINED)
              }
            }
          }
          excerpt
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
