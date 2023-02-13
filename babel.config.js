module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root:['./src'],
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            '@common': './src/common',
            '@svg': './src/assets/svg',
            '@fetch': './src/services/fetch.ts',
            '@dtos': './src/dtos',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
