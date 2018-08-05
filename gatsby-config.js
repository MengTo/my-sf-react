module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'My awesome site',
    keywords: 'react, designers'
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'o36t4xnym69m',
        accessToken: '1178e248b900dbcf8b7a35a3581f8a360abe1b264eb8928e99af32e45cb4c398'
      }
    }
  ],
}
