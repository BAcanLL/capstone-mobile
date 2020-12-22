module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true,
      "react-native/react-native": true,
    },
    "plugins":[
        "react",
        "react-native",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        "prettier/babel",
        "prettier/prettier",
        "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-uses-react": 1,
        "react-native/no-unused-styles": 1,
        "react-native/split-platform-components": 2,
    }
};
