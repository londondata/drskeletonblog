const path = require("path");

module.exports = {
	// [mode] determines how the code will be bundled. "development" = readible by humans, "production" = minified.
	mode: "development",
	// [entry] the file where the bundling starts from
	entry: "./src/index.js",
	// [output] config object to determine how and where the code is bundled
	output: {
		// [path] where to output
		path: path.join(__dirname, "public"),
		// [filename] file name lol
		filename: "bundle.js",
	},
};
