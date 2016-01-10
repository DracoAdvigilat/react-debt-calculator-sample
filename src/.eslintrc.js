
/* global module */

// const enableOverwrite = true
const disableOverwrite = false

const warn = 1
const error = 2

const indentation = 2

module.exports = {

  'plugins': [
    `react`,
  ],

  'ecmaFeatures': {
    'jsx'    : true,
    'modules': true,
  },

  'env': {
    'es6': true,
  },

  'globals': {
    'React'   : disableOverwrite,
    'ReactDOM': disableOverwrite,
  },

  'rules': {

    /* Stylistic Issues */

    'jsx-quotes': [ warn, `prefer-double` ],
    'quotes'    : [ warn, `backtick` ],



    /* ECMAScript 6 */

    'arrow-spacing'         : warn,
    'generator-star-spacing': warn,
    'object-shorthand'      : warn,
    'prefer-arrow-callback' : warn,
    'prefer-const'          : warn,
    'prefer-template'       : warn,

    'constructor-super'    : error,
    'no-arrow-condition'   : error,
    'no-class-assign'      : error,
    'no-const-assign'      : error,
    'no-dupe-class-members': error,
    'no-this-before-super' : error,
    'no-var'               : error,
    'prefer-reflect'       : error,
    'prefer-spread'        : error,
    'require-yield'        : error,

    'arrow-body-style': [ warn, `as-needed` ],
    'arrow-parens'    : [ warn, `as-needed` ],



    /* React Plugin */

    'react/display-name'                : warn,
    'react/forbid-prop-types'           : warn,
    'react/jsx-boolean-value'           : warn,
    'react/jsx-closing-bracket-location': warn,
    'react/jsx-curly-spacing'           : warn,
    'react/jsx-handler-names'           : warn,
    'react/jsx-no-literals'             : warn,
    'react/jsx-pascal-case'             : warn,
    'react/no-multi-comp'               : warn,
    'react/prop-types'                  : warn,
    'react/require-extension'           : warn,
    'react/self-closing-comp'           : warn,
    'react/sort-comp'                   : warn,
    'react/wrap-multilines'             : warn,

    'react/jsx-key'                 : error,
    'react/jsx-no-bind'             : error,
    'react/jsx-no-duplicate-props'  : error,
    'react/jsx-no-undef'            : error,
    'react/jsx-uses-react'          : error,
    'react/jsx-uses-vars'           : error,
    'react/no-danger'               : error,
    'react/no-deprecated'           : error,
    'react/no-did-mount-set-state'  : error,
    'react/no-did-update-set-state' : error,
    'react/no-is-mounted'           : error,
    'react/no-string-refs'          : error,
    'react/no-unknown-property'     : error,
    'react/prefer-es6-class'        : error,
    'react/react-in-jsx-scope'      : error,

    'react/jsx-indent-props': [ warn, indentation ],

  },
}
