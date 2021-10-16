module.exports = {
  apps: [
    {
      name: "princial",
      script: "nodemon --exec babel-node ./api/index.js",
    },
    {
      name: "auth",
      script: "nodemon --exec babel-node authMS/index.js",
    },
  ],
};
