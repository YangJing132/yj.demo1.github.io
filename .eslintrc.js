module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        parser: 'babel-eslint', //词法解析器使用babel-eslint，以更好的适配es6的新api
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6, ////启用 ES6 语法支持;默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
        "sourceType": "module" //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    },
    "plugins": [
        "prettier",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        'no-console': 'warn',
    }
};
