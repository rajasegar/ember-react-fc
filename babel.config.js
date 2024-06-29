//babel.config.js

const { buildEmberPlugins } = require("ember-cli-babel");

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
        require.resolve("@babel/preset-react")
    ],

    plugins: [
      // this is where all the ember required plugins would reside
      ...buildEmberPlugins(__dirname, { /*customOptions if you want to pass in */ }),
    ],
  };
};
