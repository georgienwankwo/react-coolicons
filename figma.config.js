// figma.config.js
require("dotenv").config();
const svgo = require("@figma-export/transform-svg-with-svgo");

const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" }),
  require("@figma-export/output-components-as-svgr")({
    output: "./src",
  }),
];

/** @type {import('svgo').PluginConfig[]} */
const solidSVGOConfig = [
  { removeDimensions: true },
  { sortAttrs: true },
  { removeAttrs: { attrs: "fill" } },
  { addAttributesToSVGElement: { attribute: { fill: "currentColor" } } },
];
const outlineSVGOConfig = [
  { name: "removeDimensions" },
  { name: "sortAttrs" },
  { name: "removeAttrs", params: { attrs: "fill" } },
  { name: "removeAttrs", params: { attrs: "stroke" } },
  {
    name: "addAttributesToSVGElement",
    params: { attribute: { fill: "None", stroke: "None" } },
  },
];

/** @type {import('svgo').PluginConfig[]} */
/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        onlyFromPages: ["outline"],
        transformers: [svgo({ multipass: true, plugins: outlineSVGOConfig })],
        outputters,
      },
    ],
  ],
};
