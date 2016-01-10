
/* global module */

(function avoidGlobalNamespace() {
  'use strict'

  var warn = 1
  var error = 2

  var indentation = 2
  var switchCaseIndent = 1
  var maxComplexity = 4
  var maxLineLength = 80
  var tabSize = 4
  var maxDepth = 4
  var maxNestedCallbacks = 3
  var maxParams = 3
  var maxStatements = 20

  module.exports = {

    'env': {
      'browser': true,
      'jquery' : true,
    },

    'rules': {

      /* Possible Errors */

      'no-console'             : warn,
      'no-constant-condition'  : warn,
      'no-debugger'            : warn,
      'no-empty'               : warn,
      'no-extra-semi'          : warn,
      'no-func-assign'         : warn,
      'no-sparse-arrays'       : warn,
      'no-unexpected-multiline': warn,

      'no-dupe-args'            : error,
      'no-dupe-keys'            : error,
      'no-duplicate-case'       : error,
      'no-empty-character-class': error,
      'no-ex-assign'            : error,
      'no-extra-boolean-cast'   : error,
      'no-invalid-regexp'       : error,
      'no-irregular-whitespace' : error,
      'no-negated-in-lhs'       : error,
      'no-obj-calls'            : error,
      'no-regex-spaces'         : error,
      'no-unreachable'          : error,
      'use-isnan'               : error,
      'valid-typeof'            : error,

      'comma-dangle'  : [ warn, 'always-multiline' ],
      'no-cond-assign': [ warn, 'except-parens' ],

      'no-inner-declarations': [ error, 'both' ],



      /* Best Practices */

      'accessor-pairs'      : warn,
      'block-scoped-var'    : warn,
      'default-case'        : warn,
      'dot-notation'        : warn,
      'no-case-declarations': warn,
      'no-div-regex'        : warn,
      'no-extra-bind'       : warn,
      'no-fallthrough'      : warn,
      'no-floating-decimal' : warn,
      'no-implicit-coercion': warn,
      'no-invalid-this'     : warn,
      'no-lone-blocks'      : warn,
      'no-magic-numbers'    : warn,
      'no-multi-spaces'     : warn,
      'no-multi-str'        : warn,
      'no-sequences'        : warn,
      'no-useless-concat'   : warn,
      'vars-on-top'         : warn,

      'consistent-return' : error,
      'eqeqeq'            : error,
      'guard-for-in'      : error,
      'no-alert'          : error,
      'no-caller'         : error,
      'no-empty-label'    : error,
      'no-empty-pattern'  : error,
      'no-eq-null'        : error,
      'no-eval'           : error,
      'no-extend-native'  : error,
      'no-implied-eval'   : error,
      'no-iterator'       : error,
      'no-loop-func'      : error,
      'no-native-reassign': error,
      'no-new'            : error,
      'no-new-func'       : error,
      'no-new-wrappers'   : error,
      'no-octal'          : error,
      'no-octal-escape'   : error,
      'no-param-reassign' : error,
      'no-process-env'    : error,
      'no-proto'          : error,
      'no-redeclare'      : error,
      'no-return-assign'  : error,
      'no-script-url'     : error,
      'no-self-compare'   : error,
      'no-throw-literal'  : error,
      'no-useless-call'   : error,
      'no-with'           : error,
      'wrap-iife'         : error,
      'yoda'              : error,

      'complexity'  : [ warn, maxComplexity ],
      'curly'       : [ warn, 'multi-or-nest' ],
      'dot-location': [ warn, 'property' ],

      'radix': [ error, 'as-needed' ],

      'no-unused-expressions': [
        error,
        {
          'allowShortCircuit': true,
          'allowTernary'     : true,
        },
      ],

      'no-warning-comments': [
        warn,
        {
          'terms': [
            'todo',
            'fixme',
          ],
          'location': 'anywhere',
        },
      ],



      /* Strict Mode */

      'strict': error,



      /* Variables */

      'no-shadow'           : warn,
      'no-undef'            : warn,
      'no-undefined'        : warn,
      'no-unused-vars'      : warn,
      'no-use-before-define': warn,

      'no-delete-var'             : error,
      'no-label-var'              : error,
      'no-shadow-restricted-names': error,
      'no-undef-init'             : error,



      /* Stylistic Issues */

      'new-cap': error,

      'block-spacing'            : warn,
      'camelcase'                : warn,
      'comma-spacing'            : warn,
      'comma-style'              : warn,
      'computed-property-spacing': warn,
      'eol-last'                 : warn,
      'func-names'               : warn,
      'no-array-constructor'     : warn,
      'new-parens'               : warn,
      'newline-after-var'        : warn,
      'no-lonely-if'             : warn,
      'no-mixed-spaces-and-tabs' : warn,
      'no-nested-ternary'        : warn,
      'no-new-object'            : warn,
      'no-spaced-func'           : warn,
      'no-unneeded-ternary'      : warn,
      'quote-props'              : warn,
      'semi-spacing'             : warn,
      'space-after-keywords'     : warn,
      'space-before-blocks'      : warn,
      'space-in-parens'          : warn,
      'space-infix-ops'          : warn,
      'space-return-throw-case'  : warn,
      'space-unary-ops'          : warn,
      'spaced-comment'           : warn,

      'array-bracket-spacing'      : [ warn, 'always' ],
      'brace-style'                : [ warn, '1tbs' ],
      'consistent-this'            : [ warn, 'self' ],
      'key-spacing'                : [ warn, { 'align': 'colon' } ],
      'max-depth'                  : [ warn, maxDepth ],
      'max-len'                    : [ warn, maxLineLength, tabSize ],
      'max-nested-callbacks'       : [ warn, maxNestedCallbacks ],
      'max-params'                 : [ warn, maxParams ],
      'max-statements'             : [ warn, maxStatements ],
      'no-multiple-empty-lines'    : [ warn, { 'max': 3, 'maxEOF': 1 } ],
      'no-trailing-spaces'         : [ warn, { 'skipBlankLines': true } ],
      'object-curly-spacing'       : [ warn, 'always' ],
      'one-var'                    : [ warn, 'never' ],
      'operator-linebreak'         : [ warn, 'before' ],
      'quotes'                     : [ warn, 'single' ],
      'semi'                       : [ warn, 'never' ],
      'space-before-function-paren': [ warn, 'never' ],
      'space-before-keywords'      : [ warn, 'always' ],

      'indent': [
        warn,
        indentation,
        {
          'SwitchCase': switchCaseIndent,
        },
      ],

      // If you end up needing to use this, use eslint-disable-line
      // Generally speaking bitwise operations are very rare
      // It almost always indicates a mistake, which is why this is enabled
      'no-bitwise': warn,

      // Dangling underscores tend to mean private functions
      // However, this convention isn't always known or followed
      // It's much better to assume that if a function is public, it's public
      // Flagging these is intended to discourage fake private functions
      'no-underscore-dangle': warn,

    },
  }

}())
