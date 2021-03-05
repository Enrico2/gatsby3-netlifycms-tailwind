import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeImage = ({ imageData }) => (
  <>
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
      <svg
        className="hidden lg:block absolute left-0 inset-y-0 h-full w-48 text-white z-40 transform scale-105"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 100,0 50,100 0,100" />
      </svg>
      <GatsbyImage
        image={imageData}
        className="object-cover w-full h-full z-30"
        alt="My Site"
      />
    </div>
  </>
)

const HeroContent = () => (
  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Data to enrich your</span>
        <span className="block text-primary-600 xl:inline">
          online business
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link
            to="/articles"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
          >
            Howrya'now?
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/about-s"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
          >
            Good'n'you?
          </Link>
        </div>
      </div>
    </div>
  </main>
)

const Hero = ({ mainImageData }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-50">
        <div className="pb-8 bg-white sm:pb-10  lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <HeroContent />
        </div>
      </div>
      <HomeImage imageData={mainImageData} />
    </div>
  )
}

const Articles = ({ articles }) => {
  const ArticleCard = ({ article }) => {
    return (
      <Link
        to={article.slug}
        className="flex flex-row border border-primary-800 rounded-lg mt-4 cursor-pointer bg-white"
      >
        <div className="flex flex-col p-2 sm:w-full md:w-9/12">
          <div className="font-bold text-lg py-2">{article.title}</div>
          <div className="text-gray-500 text-sm">
            {article.date} • {article.timeToRead} min read
          </div>
          <div className="text-gray-800">{article.excerpt}</div>
          <div className="text-primary-600 font-bold pt-3 mt-auto pb-2 hover:underline">
            Read full article
          </div>
        </div>
        <GatsbyImage
          image={article.featuredImg || article.fallbackImg}
          alt={article.title}
          className="object-contain w-3/12 rounded-r hidden sm:block sm:h-48"
        />
      </Link>
    )
  }

  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-600 mt-6 -mx-8 px-8 pb-8 pt-4 -mb-12">
      <div className="text-white">
        <Link className="underline" to="/articles">
          Latest Articles
        </Link>
      </div>
      <div className="flex flex-col">
        {articles.map(a => (
          <ArticleCard article={a} key={a.slug} />
        ))}
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const articles = data.articles.edges
    .map(edge => {
      return {
        date: edge.node.frontmatter.date,
        title: edge.node.frontmatter.title,
        excerpt: edge.node.excerpt,
        slug: edge.node.fields.slug,
        timeToRead: edge.node.timeToRead,
        featuredImg:
          edge.node.frontmatter.featuredImg?.childImageSharp?.gatsbyImageData,
        fallbackImg: data.logo.childImageSharp.gatsbyImageData,
      }
    })
    .slice(0, 3)

  return (
    <Layout>
      <Seo title={data.site.siteMetadata.title} />
      <div>
        <Hero
          mainImageData={data.homepageImage.childImageSharp.gatsbyImageData}
        />
        <Articles articles={articles} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        dateTitle
        title
      }
    }
    homepageImage: file(relativePath: { eq: "homepage.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 680, layout: CONSTRAINED)
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 320, layout: CONSTRAINED)
      }
    }
    articles: allMarkdownRemark(
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
