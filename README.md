# eslint-config-aliyun

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Aliyun style


## Install

```
$ npm install --save-dev eslint eslint-config-aliyun eslint-plugin-react
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"eslintConfig": {
		"extends": "aliyun"
	}
}
```

Then lint with `$ npm run lint`.
