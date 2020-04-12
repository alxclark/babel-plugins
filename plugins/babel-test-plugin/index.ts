import * as babelTypes from "@babel/types";

type BabelTypes = typeof babelTypes;
type BabelTypesType = babelTypes.Expression["type"];
interface BabelTransform {
  visitor: { [key in BabelTypesType]?: (path: any) => void };
  name: string;
}

export default function testPlugin({
  types,
}: {
  types: BabelTypes;
}): BabelTransform {
  return {
    name: "Test plugin",
    visitor: {
      Identifier(path) {
        if (path.node.name === "foo") {
          path.node.name = "bar";
        }
      },
    },
  };
}
