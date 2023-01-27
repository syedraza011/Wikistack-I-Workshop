const layout = require("./layout");
const addPage = require("./addpage");
const editPage = require("./editpage");
const main = require("./main");
const userList = require("./userlist");
const userPages = require("./userpages");
const wikiPage = require("./wikipage");
const notFoundPage = require("./notFoundPage");

// // views/notFoundPage.js
// const html = require("html-template-tag");
// // const layout = require("./layout");

// module.exports = () => layout(html`
//   <h1>Looks like this page doesn't exist</h1>
//   <a href="/wiki">Back to Homepage</a>
// `);

module.exports = {
  layout,
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
  notFoundPage,
};
