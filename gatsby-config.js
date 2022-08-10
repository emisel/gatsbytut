module.exports = {
  siteMetadata: {
    title: `Testklient Cytburken`,
    siteUrl: `https://gatsbytutmain23198.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
}