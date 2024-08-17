module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', 
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@models': './src/models',
            '@services': './src/services',
            '@store': './src/store',
            '@utils': './src/utils',
            '@theme': './src/theme',
            '@hooks': './src/hooks',
          }
        },
      ],
    ],
  };
};