import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WeirdSpacer = () => (
  <div className="relative pt-6 px-4 sm:px-6 lg:px-8 hidden lg:block" />
)

const ImageCoverRectangle = () => (
  <svg
    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 "
    fill="currentColor"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <polygon points="50,0 100,0 50,100 0,100" />
  </svg>
)

const HomeImage = ({ imageData }) => (
  <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <GatsbyImage
      image={imageData}
      className="object-cover w-full h-full"
      alt="My Site"
    />
  </div>
)

const SecondaryButton = () => {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-3">
      <Link
        to="/articles/an-example-article-boys"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 sm:py-4 sm:text-lg sm:px-10"
      >
        pitter patter.
      </Link>
    </div>
  )
}

const HeroContent = () => (
  <div
    className="
      mx-auto max-w-7xl px-4
      sm:px-6 sm:mt-8
      lg:px-8"
  >
    <div className="sm:text-center lg:text-left">
      <div className="text-4xl tracking-tight font-extrabold text-gray-900">
        <h1
          className="
            text-3xl mb-10 tracking-tight text-gray-900 text-center
            sm:text-5xl
            lg:mb-20 lg:text-left"
        >
          My website
        </h1>
        <h2
          className="text-2xl text-primary-800
            sm:text-4xl"
        >
          Is very pretty
        </h2>
        <h3
          className="
            text-2xl font-bold mt-4 text-primary-600
            sm:text-3xl"
        >
          Because it's using gatsby and stuff
        </h3>
      </div>
      <div
        className="
          mt-2 text-base text-gray-500 text-2xl
          sm:mt-4 sm:max-w-xl sm:mx-auto
          lg:mx-0"
      >
        <ul className="list-disc ml-4 text-left">
          <li>Howre'ya now?</li>
          <li>good'n'you?</li>
          <li>nots'bad</li>
        </ul>
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link
            to="/providers"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 sm:py-4 sm:text-lg sm:px-10"
          >
            Get Started
          </Link>
        </div>
        <SecondaryButton />
      </div>
    </div>
  </div>
)

const Hero = ({ mainImageData }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative
            pb-8 z-10 bg-white
            sm:pb-10 
            lg:max-w-2xl lg:w-full lg:pb-28 
            xl:pb-32"
        >
          <ImageCoverRectangle />
          <WeirdSpacer />
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
        className="flex flex-row border border-primary-800 rounded-lg mt-4 hover:bg-primary-100 cursor-pointer bg-white"
      >
        <div className="flex flex-col p-2 sm:w-full md:w-9/12">
          <div className="text-gray-500 text-sm">
            {article.date} • {article.timeToRead} min read
          </div>
          <div className="font-bold text-lg py-2">{article.title}</div>
          <div className="text-gray-800">{article.excerpt}</div>
          <div className="text-primary-600 font-bold pt-3 mt-auto px-2 pb-2 hover:underline">
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
