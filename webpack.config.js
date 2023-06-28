export default {
    resolve: {
      extensions: ['js', 'ts'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        // ...etc
      },
    },
  };