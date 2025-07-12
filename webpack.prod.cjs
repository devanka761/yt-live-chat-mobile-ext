const path = require("path")

module.exports = {
  mode: "production",
  entry: { content: "./src/main/content.ts" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true
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
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "58"
                  }
                }
              ],
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
