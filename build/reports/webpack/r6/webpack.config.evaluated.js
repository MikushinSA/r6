{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r6\\build\\js\\packages\\r6\\kotlin\\r6.js'
    ]
  },
  output: {
    path: 'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r6\\build\\distributions',
    filename: [Function: filename],
    library: 'r6',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r6\\build\\processedResources\\js\\main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}