const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
let d = new Date()
let monthName = months[d.getMonth()]
let year = d.getFullYear()

let dateTitle = monthName + " " + year

module.exports = {
  siteMetadata: {
    title: `Gatsby starter with tailwindcss + NetlifyCMS`,
    description: `Gatsby starter with tailwindcss + NetlifyCMS`,
    author: `@enrico2`,
    keywords: "gatsby netlify netlifycms tailwindcss".split(", "),
    siteUrl: "https://github.com/Enrico2/gatsby3-netlifycms-tailwind",
    dateTitle,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remark-collection`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-excel`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby starter with tailwindcss + NetlifyCMS`,
        short_name: `Gatsby starter with tailwindcss + NetlifyCMS`,
        start_url: `/`,
        background_color: `#1c6ed3`,
        theme_color: `#1c6ed3`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
  ],
}
