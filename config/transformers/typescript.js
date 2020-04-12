const { createTransformer } = require("babel-jest");

const babelOptions = {
  babelrc: false,
  presets: [
    ["@shopify/babel-preset/node", { modules: "commonjs", typescript: true }],
  ],
  sourceMaps: "inline",
};

module.exports = createTransformer(babelOptions);
