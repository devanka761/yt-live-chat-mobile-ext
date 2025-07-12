const path = require("path")

module.exports = {
  mode: "development",
  entry: { content: "./src/main/content.ts" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: false
  },
  resolve: {
    extensions: [".ts", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  watch: true
}
