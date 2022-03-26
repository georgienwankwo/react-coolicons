require("dotenv").config();
const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svgr")({
    output: "./src",
  }),
];
/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        onlyFromPages: ["outline"],
        outputters,
      },
    ],
  ],
};
