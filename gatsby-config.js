module.exports = {
  pathPrefix: '/portfolio',
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'entities',
        path: `${__dirname}/src/entities`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
  mapping: {
    'WorksJson.skills': 'SkillsJson',
  },
};
