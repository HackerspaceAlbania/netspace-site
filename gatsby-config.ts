import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `netspace-site`,
    siteUrl: `https://netspace.al`,
    pathPrefix: "netspace-site"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/mdx/projects/`,
      }
    },
    "gatsby-plugin-mdx",
  ]
};

export default config;
