module.exports = {
  testURL: 'http://localhost:8080',
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/src/'],
  setupTestFrameworkScriptFile: '<rootDir>/src/testHelpers/setupTest.js',
};
