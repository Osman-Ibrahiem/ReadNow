module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@navigation': './src/navigation',
            '@screens':    './src/screens',
            '@store':      './src/store',
            '@theme':      './src/theme',
            '@types':      './src/types',
            '@utils':      './src/utils',
            '@api':        './src/api',
          },
        },
      ],
    ],
  };
};