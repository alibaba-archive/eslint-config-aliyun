# eslint-config-aliyun

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Aliyun style


## Install

```
$ npm install --save-dev eslint eslint-config-aliyun eslint-plugin-react babel-eslint
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint --ext .js --ext .jsx --ignore-path .gitignore ."
	},
	"eslintConfig": {
		"extends": "aliyun"
	}
}
```

Then lint with `$ npm run lint`.
