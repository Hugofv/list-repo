const esModules = [
  'react-markdown',
  'vfile',
  'unist-.+',
  'unified',
  'bail',
  'is-plain-obj',
  'trough',
  'remark-.+',
  'mdast-util-.+',
  'micromark',
  'parse-entities',
  'character-entities',
  'property-information',
  'comma-separated-tokens',
  'hast-util-whitespace',
  'remark-.+',
  'space-separated-tokens',
  'decode-named-character-reference',
  'ccount',
  'escape-string-regexp',
  'markdown-table',
  'trim-lines',
].join('|');

module.exports = {
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babelTransform.js',
    [`(${esModules}).+\\.js$`]: '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
    [`^(axios).+\\.js$`]: 'babel-jest',
  },
  transformIgnorePatterns: [
    `[/\\\\]node_modules[/\\\\](?!${esModules}).+\\.(js|jsx|mjs|cjs|ts|tsx)$`,
    '^.+\\.module\\.(css|sass|scss)$',
    'node_modules/(?!axios)',
  ],
  moduleNameMapper: {
    axios: '<rootDir>/node_modules/axios/dist/node/axios.cjs',
  },
};
