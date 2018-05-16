module.exports = {
  collectCoverageFrom: [
    '{containers,contents,components,lib,pages}/**/*.{js,md}'
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
