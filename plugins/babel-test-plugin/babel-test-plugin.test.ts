import pluginTester from "babel-plugin-tester";

import testPlugin from ".";

pluginTester({
  plugin: testPlugin,
  tests: {
    "changes this code": {
      code: "var foo = 1;",
      output: "var bar = 1;",
    },
  },
});
