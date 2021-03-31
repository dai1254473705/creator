/** @format */

// 参考： https://segmentfault.com/a/1190000019661168
module.exports = {
	//在ts项目中必须执行解析器为@typescript-eslint/parser，才能正确的检测和规范TS代码
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	// https://eslint.bootcss.com/docs/user-guide/configuring
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'prettier', '@typescript-eslint'],
	// https://github.com/yannickcr/eslint-plugin-react
	// https://www.npmjs.com/package/@typescript-eslint/parser
	extends: [
		'plugin:react/recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		// 使用prettier中的样式规范，且如果使得ESLint会检测prettier的格式问题，同样将格式问题以error的形式抛出
		'plugin:prettier/recommended',
	], //定义文件继承的子规范
	/**
	 * "off" 或 0 - 关闭规则
	 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
	 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	 */
	rules: {
		'react/jsx-filename-extension': [0],
		'react/require-default-props': [0],
		'no-plusplus': [0],
		'import/no-unresolved': [0],
		'react/prop-types': [0],
		'class-methods-use-this': [0],
		'react/destructuring-assignment': [0],
		'arrow-body-style': [0],
		'import/prefer-default-export': [0],
		'import/no-extraneous-dependencies': [0],
		'react/state-in-constructor': [0],
		'jsx-quotes': ['error', 'prefer-double'],
		'react/jsx-indent-props': [0],
		'react/jsx-indent': [0],
		'import/no-commonjs': [0],
		'import/first': [0],
		'react/sort-comp': [0],
		'no-console': [0],
		'no-set-state': [0],
		'@typescript-eslint/rule-name': [0],
		'prettier/prettier': [2],
		'prefer-arrow-callback': [0],
		'@typescript-eslint/explicit-module-boundary-types': [0],
		semi: [0],
		'@typescript-eslint/no-var-requires': [0],
	},
	settings: {
		react: {
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect',
		},
	},
};
