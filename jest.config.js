module.exports = {
  collectCoverageFrom: [
    '{components,hocs,lib,pages}/**/*.{js}'
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/out'
  ],
  testMatch: [
    '<rootDir>/tests/**/*.test.js'
  ],
  transform: {
    '\\.(md|css)$': '<rootDir>/tests/raw-loader-transform.js',
    '.*': 'babel-jest'
  }
}
