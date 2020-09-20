/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      {
        allInterviewsJson {
          edges {
            node {
              slug
            }
          }
        }
        allQuestionsJson {
          nodes {
            slug
          }
        }
      }
    `)
  
    results.data.allInterviewsJson.edges.forEach(edge => {
      const interview = edge.node;
  
      createPage({
        path: `/interview/${interview.slug}/`,
        component: require.resolve("./src/templates/interview/interview.js"),
        context: {
          slug: interview.slug
        },
      });
      
    })

    results.data.allQuestionsJson.nodes.forEach(question => {
  
      createPage({
        path: `/question/${question.slug}/`,
        component: require.resolve("./src/templates/question/question.js"),
        context: {
          slug: question.slug
        },
      });
      
    })
  };