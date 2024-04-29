module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
      'node_modules/(?!react-native-payfort-sdk|react-native)/',
    ],
    globals: {
      __DEV__: true,
    },
    testEnvironment: 'node',
    setupFiles: ["./jestSetupFile.js",],
  };
