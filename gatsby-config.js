module.exports = {
  pathPrefix: '/portfolio',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'entities',
        path: `${__dirname}/src/entities`,
      },
    },
    'gatsby-transformer-json',
  ],
  mapping: {
    'WorksJson.skills': 'SkillsJson',
  },
};
