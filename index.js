module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": 'module',
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "load": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    /* Best Practices */
    "array-callback-return": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "radix": [
      "error"
    ],
    /* Stylistic Issues */
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "space-before-blocks": [
      "error"
    ],
    "keyword-spacing": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "eol-last": [
      "error"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "never"
    ],
    "key-spacing": [
      "error"
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "func-call-spacing": [
      "error"
    ],
    "comma-spacing": [
      "error"
    ],
    "semi-spacing": [
      "error"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "no-multiple-empty-lines": [
      "error"
    ],
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "brace-style": [
      "error"
    ],
    "new-parens": [
      "error"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "camelcase": [
      "error"
    ],
    "new-cap": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-array-constructor": [
      "error"
    ],
    /* ECMAScript 6 */
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error"
    ],
    "template-curly-spacing": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ]
  },
  "extends": "eslint:recommended"
};
