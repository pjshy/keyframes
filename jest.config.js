const path = require('path')

module.exports = {
  browser: true,

  verbose: true,

  rootDir: path.join(__dirname),

  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],

  modulePaths: ['<rootDir>/src'],

  moduleFileExtensions: ['ts', 'js'],

  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],

  testRegex: '/__test__/.*\\.spec\\.(j|t)sx?$',

  preset: 'ts-jest'
}