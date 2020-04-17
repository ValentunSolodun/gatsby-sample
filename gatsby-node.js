const fetch = require(`node-fetch`)
const axios = require('axios');
const _ = require("lodash");

const getAllTodo = async () => {
  const response = await axios.get('http://localhost:3001/');
  return response.data;
}


exports.createPages = async ({ actions, graphql }) => {
  const toDoList = await getAllTodo();
  actions.createPage({
    path: `/login`,
    component: require.resolve(`./src/templates/login-page.js`),
  });
  actions.createPage({
    path: `/register`,
    component: require.resolve(`./src/templates/register-page.js`),
  });
  toDoList.forEach(item => {
    actions.createPage({
      path: `/item/${item.id}`,
      component: require.resolve(`./src/templates/all-todo.js`),
      context: {item}
    })
  });

}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const toDoList = await getAllTodo();
  actions.createNode({
    list: !_.isEmpty(toDoList) ? toDoList : [],
    id: `build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Todo`,
      contentDigest: createContentDigest(toDoList),
    },
  });
}
