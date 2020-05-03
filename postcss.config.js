postcss.config.js

// postcss.config.js
module.exports = {
  plugins: {
    'autoprefixer': {
      "browserslist": [
      "Firefox >= 20",
      "Android > 4.4"
    ]},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
