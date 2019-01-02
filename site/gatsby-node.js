/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const getHowtohire = makeRequest(
    graphql,
    `
    {
      allStrapiHirehowtohire {
        edges {
          node {
            id,
            jobtitle,
            whyhire {
              intro,
              contributions
              },
            skills {
              intro,
              qualifications
              },
            writeJDP {
              intro,
              keywords
              },
            interviewing {
              intro,
              topics
              }
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiHirehowtohire.edges.forEach(({ node }) => {
      createPage({
        path: `/hire/how-to-hire/${node.jobtitle.toLowerCase()}`,
        component: path.resolve(`src/templates/how-to-hire.js`),
        context: {
          jobtitle: node.jobtitle,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getHowtohire
}