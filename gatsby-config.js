module.exports = {
  siteMetadata: {
    title: `Yet Another Code Font`,
    description: `A living list of fonts created for use inside a text editor or terminal`,
    author: `nathanalentz@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `fontsCollection`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `font-collection`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yet-another-code-font`,
        short_name: `yacf`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#F5F5F7`,
        display: `minimal-ui`,
        icon: `src/images/Y.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baloo Bhai 2\:500,700,800`,
          `roboto\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-78676024-3",
        cookieDomain: "yetanothercodefont.com"
      }
    }

  ],
}
