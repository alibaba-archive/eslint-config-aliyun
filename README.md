# eslint-config-aliyun

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Aliyun style


## Install

```
$ npm install --save-dev eslint eslint-config-aliyun
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^2.7.0",
		"eslint-config-aliyun": "^1.0.0"
	},
	"eslintConfig": {
		"extends": "aliyun"
	}
}
```

Then lint with `$ npm run lint`.
