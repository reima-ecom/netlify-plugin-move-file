const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const rename = promisify(fs.rename);

module.exports = {
  onBuild: async (
    { inputs: { filePath }, constants: { PUBLISH_DIR }, utils },
  ) => {
    console.log(
      `Moving file ${filePath} to publish dir`,
    );
    var oldPath = path.join(process.cwd(), filePath);
    var newPath = path.join(process.cwd(), PUBLISH_DIR, filePath);

    try {
      await rename(oldPath, newPath);
      console.log("Done");
    } catch (error) {
      utils.build.failPlugin("Could not update index", { error });
    }
  },
};
