/* export default {
    resolve: {
      extensions: ['js', 'ts'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        // ...etc
      },
    },
  }; */

const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@API': path.resolve(__dirname, 'src/API'),
    }
  },
};

/* {
  "plugins": [
    ["module-resolver", {
      "alias": {
        "@components": "./src/components",
        "@styles": "./src/styles"
      }
    }],
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "scss"
    }]
  ]
}

 */