const { resolve } = require("path");

const transformersRoot = resolve(__dirname, "config", "transformers");

const config = {
  transform: {
    "\\.[tj]sx?$": resolve(transformersRoot, "typescript.js"),
  },
};

module.exports = config;
