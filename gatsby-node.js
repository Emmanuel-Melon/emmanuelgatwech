/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  // pull in or use whatever data

  const blog = [
    {
      title: "#100DaysOfCode",
      subtitle: "Don't hold back yourself, realise your full potential",
      id: 1,
      summary: "But that's the thing about tech, you can't know everything and you don't have to; Just learn enough to become productive and you'll eventually become really good at what you do because learning is a continuous process."
    }
  ]

  blog.forEach(article => {
    createPage({
      path: `/blog/${article.id}`,
      component: require.resolve(`./src/templates/blog-template.js`),
      context: { article },
    })
  })
}
