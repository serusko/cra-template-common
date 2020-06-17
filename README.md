# cra-template-common

Common temaplate including some small improvements:

- Typescript ready
- prettier onSave
- eslint with enhanced rules
- stylelint
- VSCode / Codium workspace
- commitlint

## Recommendations / Before you start

- template is using handy [Real Favicon Generator](https://realfavicongenerator.net) = upload your image and replace icons
- if u are using `styled-components` please improve `.stylelint.config/js` [see more](https://styled-components.com/docs/tooling#stylelint) or [sass config](https://github.com/kristerkari/stylelint-scss)
- feel free to customize [commitlint](https://commitlint.js.org/#/) as [husky](https://github.com/typicode/husky) pre-commit hook (e.g. add [Jira ticket requirement](https://www.npmjs.com/package/commitlint-plugin-jira-rules))

## Known issues
- [devDependecies cannot be splitted](https://github.com/facebook/create-react-app/issues/8082) on template level, feel free to do it on your own 


## Usage 

```sh
npx create-react-app my-app --template @serusko/common

# or

yarn create react-app my-app --template @serusko/common
```






