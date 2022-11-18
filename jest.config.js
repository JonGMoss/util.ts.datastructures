module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.test.js'],
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
