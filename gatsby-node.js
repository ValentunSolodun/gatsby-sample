const fetch = require(`node-fetch`)
const { graphql } = "gatsby";

const getAllTodo = async (graphql) => {

  let { data: {allMysqlTodo: { nodes }}} = await graphql(`
    {
      allMysqlTodo {
        nodes {
          id
          text
          done
          mysqlId
        }
      }
    }
  `)
  return nodes;
}


exports.createPages = async ({actions, graphql}) => {
  const toDoList = await getAllTodo(graphql);
  toDoList.forEach(item => {
    actions.createPage({
      path: `/item/${item.id}`,
      component: require.resolve(`./src/templates/all-todo.js`),
      context: { item },
    })
  })

}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const toDoList = await getAllTodo(graphql);
  // console.log(toDoList)
  actions.createNode({
    list: toDoList,
    id: `build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Todo`,
      contentDigest: createContentDigest(toDoList),
    },
  })
}
