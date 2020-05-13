module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: '__tests__',
  testRegex: ['.spec.js$', '.test.js$'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules'
  ],
  modulePathIgnorePatterns: ['<rootDir>/build']
};
