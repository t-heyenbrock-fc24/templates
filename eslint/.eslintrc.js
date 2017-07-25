module.exports = {
    'extends': ['google'],
    'plugins': ['react'],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'indent': ['error', 'tab'],
        'indent': ['error', 4],
        'class-methods-use-this': 0,
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'react/jsx-uses-vars': 1,
        'quotes': ['error', 'single'],
        'strict': ['error', 'global'],
        'max-len': ['error', 200]
    }
}
