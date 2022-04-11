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
	// below rules configure babel which enables jsx
	// set any external webpack modules
	module: {
		// [rules] module rules
		rules: [
			// 1st rule is to identify js and js files and turn on babel
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			// Second rule is to check for css files and load them with the following loaders
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
